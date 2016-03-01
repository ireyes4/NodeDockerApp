FROM node

COPY . /src
WORKDIR /src

# install your application's dependencies
RUN npm install

# replace this with your application's default port
EXPOSE 3000

# replace this with your main "server" script file
CMD [ "npm", "start" ]
