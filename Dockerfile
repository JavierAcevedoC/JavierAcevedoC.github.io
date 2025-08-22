# Etapa 1: Build
FROM node:20-alpine as builder
WORKDIR /app
COPY portfolio/package*.json ./
RUN npm install
COPY portfolio/. .
RUN npm run build 

# Etapa 2: Servidor Nginx
FROM nginx:alpine
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

