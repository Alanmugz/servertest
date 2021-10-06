FROM node:13-alpine

COPY package*.json /data/
WORKDIR /data/
RUN npm install
COPY . /data/app/
WORKDIR /data/app/

EXPOSE 3000
CMD [ "node", "app.js" ]