FROM node:18-alpine AS builder
WORKDIR /app
COPY backend/package.json backend/package-lock.json* ./backend/
COPY backend/tsconfig.json ./backend/
COPY backend/src ./backend/src
WORKDIR /app/backend
RUN npm ci --no-audit --prefer-offline || npm install
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/backend/dist ./dist
COPY backend/package.json ./
ENV NODE_ENV=production
EXPOSE 4000
CMD ["node","dist/index.js"]
