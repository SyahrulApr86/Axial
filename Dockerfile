# Stage 1: Build
FROM node:18-bullseye AS builder

# Set working directory
WORKDIR /app

# Install system dependencies for native modules
RUN apt-get update && apt-get install -y \
  build-essential \
  python3 \
  make \
  g++ \
  pkg-config \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev \
  && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies using NPM with lockfile
RUN npm ci --frozen-lockfile

# Copy prisma schema and generate Prisma client
COPY prisma ./prisma
RUN npx prisma generate

# Copy application source
COPY . .

# Set production environment for build
ENV NODE_ENV=production

# Run Next.js production build
RUN npm run build

# Stage 2: Production Runner
FROM node:18-bullseye AS runner

# Set working directory
WORKDIR /app

# Install minimal utilities
RUN apt-get update && apt-get install -y \
  curl \
  netcat-openbsd \
  && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd --gid 1001 nodejs && \
  useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home nextjs

# Copy runtime files from builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy required node_modules for Prisma client
COPY --from=builder /app/node_modules ./node_modules

# Set permissions for logs and ownership
RUN mkdir -p /app/logs && chown -R nextjs:nodejs /app/logs
COPY scripts/docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh
RUN chown -R nextjs:nodejs /app

USER nextjs

# Set environment
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Entrypoint script
ENTRYPOINT ["./docker-entrypoint.sh"]

# Start server
CMD ["node", "server.js"]
