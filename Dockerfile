FROM node:0.10.42

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN yum install -y npm

ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app

EXPOSE 8080

CMD node ./app.js
