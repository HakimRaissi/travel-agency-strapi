# Build Stage
FROM node:20-alpine as build

WORKDIR /app

RUN apk add --no-cache \
  libc6-compat \
  bash \
  python3 \
  make \
  g++ \
  sqlite

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

# Run Stage
FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache sqlite

COPY --from=build /app .

EXPOSE 1337

CMD ["npm", "run", "start"]
