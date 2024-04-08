FROM node:16-slim
LABEL org.opencontainers.image.source https://github.com/ondrejsika/random-password-web
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD [ "yarn", "start" ]
EXPOSE 3000
