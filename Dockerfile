FROM node:12.18.2-alpine
WORKDIR /student-tracker-api
COPY package.json .
RUN mkdir src
COPY /src ./src
COPY .env .
COPY babel.config.js .
RUN apk add make gcc g++ && apk add python && yarn && yarn build
EXPOSE 3001
CMD ["yarn", "serve"]