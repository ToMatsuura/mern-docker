FROM node:10.18.0-alpine3.9

EXPOSE 5005

RUN apk add --update curl
WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

RUN npm cache clean --force && npm install && npm install -g nodemon
COPY . .

CMD ["npm", "run", "dev"]

