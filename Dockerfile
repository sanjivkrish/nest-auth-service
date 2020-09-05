FROM node:12

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "start:prod"]