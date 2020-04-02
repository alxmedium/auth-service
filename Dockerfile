FROM node:12.16.1

WORKDIR /urs/alxmedium/auth

COPY package*.json ./

RUN npm i --only=production

COPY ./build ./

EXPOSE 3000

CMD node build/server.js