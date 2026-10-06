FROM node:24-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
COPY frontend/package.json frontend/package.json
COPY backend/package.json backend/package.json
RUN npm ci

FROM node:24-alpine AS build
WORKDIR /app
COPY --from=dependencies /app/ ./
COPY backend/ backend/
RUN npm run build --workspace @spot/backend

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3001
COPY backend/package.json ./package.json
COPY --from=build /app/backend/dist ./dist
USER node
EXPOSE 3001
CMD ["node", "dist/server.js"]
