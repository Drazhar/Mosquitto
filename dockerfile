FROM node:14.14.0

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "node", "sensor.js"]