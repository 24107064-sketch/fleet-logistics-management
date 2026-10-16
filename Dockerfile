
# Stage 1: Build the React application
FROM node:22-bookworm-slim AS builder

WORKDIR /app

# Enable pnpm using Corepack
RUN corepack enable

# Copy workspace configuration
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY tsconfig.base.json ./
# Copy workspace packages and shared libraries
COPY artifacts ./artifacts
COPY lib ./lib
COPY scripts ./scripts

# Install dependencies for the complete workspace
RUN pnpm install --frozen-lockfile

# Build the frontend
ENV PORT=5173
ENV BASE_PATH=/

RUN pnpm --filter @workspace/fleet-logistics run build

# Stage 2: Serve the built website with Nginx
FROM nginx:alpine

COPY --from=builder /app/artifacts/fleet-logistics/dist/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
