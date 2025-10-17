# Compilacion de TypeScript
FROM node:trixie-slim AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Montar servidor con el codigo compilado
FROM node:trixie-slim AS production

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY --from=builder /app/dist ./dist
EXPOSE 5000
CMD ["npm", "run", "start"]