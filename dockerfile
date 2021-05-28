FROM arm32v6/node:14-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD [ "node", "sensor.js"]