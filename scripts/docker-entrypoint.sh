#!/bin/bash
set -e

# Exit on any command failure
trap 'echo "ERROR: Command failed at line $LINENO. Exit code: $?" >&2; exit 1' ERR

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"
}

# Error logging function
error() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] ERROR: $*" >&2
}

# Success logging function
success() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS: $*"
}

log "Starting Portfolio Application initialization..."

# Function to wait for PostgreSQL with timeout and retries
wait_for_postgres() {
    log "Waiting for PostgreSQL database to become available..."
    local max_retries=30
    local retry_interval=2
    local retries=0
    
    while ! nc -z postgres 5432; do
        if [ $retries -ge $max_retries ]; then
            error "PostgreSQL connection timeout after $((max_retries * retry_interval)) seconds"
            error "Database service may not be running or accessible"
            exit 1
        fi
        
        retries=$((retries + 1))
        log "PostgreSQL not ready, attempt $retries/$max_retries, retrying in ${retry_interval}s..."
        sleep $retry_interval
    done
    
    success "PostgreSQL database connection established"
}

# Function to apply database schema with retries
apply_database_schema() {
    log "Applying database schema and migrations..."
    local max_retries=5
    local retry_interval=5
    
    for attempt in $(seq 1 $max_retries); do
        log "Schema application attempt $attempt/$max_retries"
        
        if npx prisma db push --accept-data-loss 2>/dev/null; then
            success "Database schema applied successfully"
            return 0
        else
            if [ $attempt -eq $max_retries ]; then
                error "Failed to apply database schema after $max_retries attempts"
                error "Please check database connectivity and permissions"
                exit 1
            fi
            log "Schema application failed, retrying in ${retry_interval}s..."
            sleep $retry_interval
        fi
    done
}

# Function to create admin user
create_admin_user() {
    log "Creating/updating admin user account..."
    
    if node scripts/create-admin.js; then
        success "Admin user account created/updated successfully"
        log "Admin email: ${ADMIN_EMAIL:-admin@portfolio.com}"
    else
        error "Failed to create/update admin user account"
        error "Application will continue but admin login may not work"
        log "Please check admin credentials in environment variables"
    fi
}

# Function to validate environment
validate_environment() {
    log "Validating environment configuration..."
    
    # Check required environment variables
    local required_vars=("DATABASE_URL" "JWT_SECRET")
    local missing_vars=()
    
    for var in "${required_vars[@]}"; do
        if [ -z "${!var}" ]; then
            missing_vars+=("$var")
        fi
    done
    
    if [ ${#missing_vars[@]} -gt 0 ]; then
        error "Missing required environment variables: ${missing_vars[*]}"
        error "Please check your .env file or environment configuration"
        exit 1
    fi
    
    success "Environment validation completed"
}

# Function to perform health checks
perform_health_checks() {
    log "Performing pre-startup health checks..."
    
    # Check if required directories exist
    local required_dirs=("/app/.next" "/app/node_modules" "/app/prisma")
    
    for dir in "${required_dirs[@]}"; do
        if [ ! -d "$dir" ]; then
            error "Required directory not found: $dir"
            exit 1
        fi
    done
    
    # Check if required files exist
    local required_files=("/app/package.json" "/app/server.js")
    
    for file in "${required_files[@]}"; do
        if [ ! -f "$file" ]; then
            error "Required file not found: $file"
            exit 1
        fi
    done
    
    success "Health checks completed successfully"
}

# Main execution flow
main() {
    log "Portfolio Application Docker Container Starting"
    log "Container: $(hostname)"
    log "User: $(whoami)"
    log "Working Directory: $(pwd)"
    log "Node.js Version: $(node --version)"
    log "NPM Version: $(npm --version)"
    
    # Execute initialization steps
    validate_environment
    perform_health_checks
    wait_for_postgres
    apply_database_schema
    create_admin_user
    
    log "Initialization completed successfully"
    log "Starting Next.js application server..."
    
    # Execute the main application
    exec "$@"
}

# Run main function with all arguments
main "$@"