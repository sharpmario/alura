FROM node:latest
MAINTAINER Mário Santos Sousa
COPY . /var/www
WORKDIR /var/www
RUN npm install 
ENTRYPOINT npm start
EXPOSE 3000
# sudo docker build -t itsmemarioss/node .