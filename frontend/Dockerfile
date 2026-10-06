FROM node:24-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
COPY frontend/package.json frontend/package.json
COPY backend/package.json backend/package.json
RUN npm ci

FROM node:24-alpine AS build
WORKDIR /app
COPY --from=dependencies /app/ ./
COPY frontend/ frontend/
RUN npm run build --workspace @spot/frontend

FROM nginx:stable-alpine
ENV BACKEND_URL=http://backend:3001
COPY frontend/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/frontend/build/client /usr/share/nginx/html
EXPOSE 80
