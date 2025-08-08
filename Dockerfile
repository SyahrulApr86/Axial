# Stage 1: Build Stage
FROM node:18-bullseye AS builder

WORKDIR /app

# Install system dependencies
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

# Optional: Add mirror for lightningcss native binary
ENV LIGHTNINGCSS_BINARY_HOST_MIRROR=https://unpkg.com/lightningcss-linux-x64-gnu@latest/

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --frozen-lockfile

# Rebuild lightningcss to fix native binary issues
RUN npm rebuild lightningcss

# Copy prisma schema and generate Prisma client
COPY prisma ./prisma
RUN npx prisma generate

# Copy all source code
COPY . .

# Build Next.js app
ENV NODE_ENV=production
RUN npm run build

# ---------------------------------------------

# Stage 2: Runtime Stage
FROM node:18-bullseye AS runner

WORKDIR /app

# Install minimal system tools
RUN apt-get update && apt-get install -y \
  curl \
  netcat-openbsd \
  && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd --gid 1001 nodejs
RUN useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home nextjs

# Copy only the necessary files
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts

# Copy built Next.js app
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy prisma client modules
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Setup logging dir
RUN mkdir -p /app/logs && chown -R nextjs:nodejs /app/logs

# Copy & make entrypoint executable
COPY scripts/docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

# Change ownership
RUN chown -R nextjs:nodejs /app
USER nextjs

# Set runtime environment
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Entrypoint
ENTRYPOINT ["./docker-entrypoint.sh"]

CMD ["node", "server.js"]
