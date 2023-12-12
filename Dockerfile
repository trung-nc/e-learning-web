# Stage 1: Build the client
FROM node:latest as client-builder

WORKDIR /app/client

# Copy the client application files
COPY ./client/package.json ./client/package-lock.json ./
RUN npm install

COPY ./client ./
RUN npm run build

# Stage 2: Build the server
FROM node:latest as server-builder

WORKDIR /app/server

# Copy the server application files
COPY ./server/package.json ./server/package-lock.json ./
RUN npm install

COPY ./server ./

# Stage 3: Final image with client and server
FROM node:latest

WORKDIR /app

# Copy the built client and server from previous stages
COPY --from=client-builder /app/client/build ./client/build
COPY --from=server-builder /app/server ./

# Expose ports or add any necessary configurations

# Start the server
CMD ["node", "server.js"]
