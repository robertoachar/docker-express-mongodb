FROM node:8.11.1-alpine

LABEL maintainer="robertoachar@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm install -g nodemon

ENV NODE_ENV=development
ENV DATABASE=mongodb://mongodb:27017/playground
ENV PORT=3000

EXPOSE 3000

CMD [ "nodemon", "-L", "src/index.js" ]
