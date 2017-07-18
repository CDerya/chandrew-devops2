FROM node:8

RUN mkdir -p /usr/src/index

COPY index.js /usr/src/index

COPY package.json /usr/src/index

WORKDIR /usr/src/index

RUN npm install

EXPOSE 8080

CMD node index.js