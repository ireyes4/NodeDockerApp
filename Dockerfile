#FROM node:argon

# Create app directory
#RUN mkdir -p /usr/src/app
#WORKDIR /usr/src/app

# Install app dependencies
#COPY package.json /usr/src/app/
#RUN npm install

# Bundle app source
#COPY . /usr/src/app

#EXPOSE 8080
#CMD npm start /usr/src/app/app.js
FROM node

COPY . /src
WORKDIR /src

# install your application's dependencies
RUN npm install

# replace this with your application's default port
EXPOSE 3000

# replace this with your main "server" script file
CMD [ "npm", "start" ]
