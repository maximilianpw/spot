FROM oven/bun:1.4.2 AS dependencies
WORKDIR /app
COPY package.json bun.lock ./
COPY frontend/package.json frontend/package.json
COPY backend/package.json backend/package.json
RUN bun install --frozen-lockfile

FROM node:24-alpine AS build
WORKDIR /app
COPY --from=dependencies /app/ ./
COPY frontend/ frontend/
WORKDIR /app/frontend
RUN ./node_modules/.bin/react-router build

FROM nginx:stable-alpine
ENV BACKEND_URL=http://backend:3001
COPY frontend/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/frontend/build/client /usr/share/nginx/html
EXPOSE 80
