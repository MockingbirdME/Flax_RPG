FROM node:10-alpine

WORKDIR '/usr/src/game'


# Install build dependencies for node-gyp, which React uses to build the client.
RUN apk add --no-cache --virtual .gyp python make g++

# Install server dependencies
COPY package*.json ./
RUN npm install --production

# Install client dependencies
Copy client/package*.json client/
RUN npm run client-install

# Copy and build the client
COPY client client
RUN npm run client-build
RUN npm -rf client/src client/node_modules && apk del .gyp

# Get the rest of the code
COPY . .

# Start the server
CMD [ "npm", "start" ]
