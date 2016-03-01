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
FROM    centos:centos6
 
# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Bundle app source
COPY . /src
# Install Node.js and npm, install app dependencies, and remove extraneous files
RUN yum install -y npm \
 && cd /src; npm install \
 && rm -rf /var/cache/yum \
 && rm -rf /usr/lib/locale \
 && rm -rf /usr/lib/gcc \
 && rm -rf /usr/share/locale
 
EXPOSE  8080
CMD ["node", "/src/app.js"]
