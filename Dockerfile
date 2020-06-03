FROM node:12.16.1

WORKDIR /urs/alxmedium/auth-service

COPY package*.json ./

RUN npm i --only=production

COPY ./build ./

EXPOSE 3000

CMD node server.js