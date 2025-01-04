FROM node:10.18.0-alpine3.9

EXPOSE 5137

RUN apk add --update curl
WORKDIR /usr/src/app

COPY package.json package-lock.json* ./

COPY . .

CMD [ "npm", "start" ]

