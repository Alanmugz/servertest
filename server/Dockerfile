FROM node:14

COPY package*.json /data/
WORKDIR /data/
RUN npm install
COPY . /data/app/
WORKDIR /data/app/

CMD [ "node", "app.js" ]