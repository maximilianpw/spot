FROM oven/bun:1.4.2 AS dependencies
WORKDIR /app
COPY package.json bun.lock ./
COPY frontend/package.json frontend/package.json
COPY backend/package.json backend/package.json
RUN bun install --frozen-lockfile

FROM node:24-alpine AS build
WORKDIR /app
COPY --from=dependencies /app/ ./
COPY backend/ backend/
RUN ./node_modules/.bin/tsc -p backend/tsconfig.build.json

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001
COPY backend/package.json ./package.json
COPY --from=build /app/backend/dist ./dist
USER node
EXPOSE 3001
CMD ["node", "dist/server.js"]
