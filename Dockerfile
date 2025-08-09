# Stage 1: Build
FROM node:18-bullseye AS builder

WORKDIR /app

# Install build dependencies
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

# Install dependencies
RUN npm ci --frozen-lockfile

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy full app source
COPY . .

# Build app with standalone output
ENV NODE_ENV=production
# Copy PostCSS config for Docker build
COPY postcss.config.docker.mjs postcss.config.mjs
RUN npm run build

# Stage 2: Runner
FROM node:18-bullseye AS runner

WORKDIR /app

# Install runtime utilities
RUN apt-get update && apt-get install -y \
  curl \
  netcat-openbsd \
  && rm -rf /var/lib/apt/lists/*

# Create a non-root user
RUN groupadd --gid 1001 nodejs && \
  useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home nextjs

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts ./scripts

# Copy built app from standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copy all node_modules required at runtime (not just Prisma)
COPY --from=builder /app/node_modules ./node_modules

# Create logs folder and set permissions
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

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "server.js"]
