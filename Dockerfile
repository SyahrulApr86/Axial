# Stage 1: Builder
FROM node:18-bullseye AS builder

WORKDIR /app

# Install native build dependencies
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

# Set environment for LightningCSS to download correct native binary
ENV LIGHTNINGCSS_BINARY_HOST_MIRROR=https://unpkg.com/lightningcss-linux-x64-gnu@latest/

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --frozen-lockfile

# Force rebuild native modules (especially lightningcss)
RUN npm rebuild lightningcss \
  && node -e "require('lightningcss')"

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy all remaining source code
COPY . .

# Build the Next.js application
ENV NODE_ENV=production
RUN npm run build

# Stage 2: Runner
FROM node:18-bullseye AS runner

WORKDIR /app

# Install runtime utilities
RUN apt-get update && apt-get install -y \
  curl \
  netcat-openbsd \
  && rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN groupadd --gid 1001 nodejs && \
  useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home nextjs

# Copy necessary files from builder
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy Prisma client and node_modules subset
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

# Setup logs
RUN mkdir -p /app/logs && chown -R nextjs:nodejs /app/logs

# Copy and prepare entrypoint script
COPY scripts/docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

# Change ownership of app directory
RUN chown -R nextjs:nodejs /app
USER nextjs

# Set environment
ENV NODE_ENV=production
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Entrypoint and default command
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "server.js"]
