FROM node:alpine as builder

WORKDIR /react-app

COPY ./package.json /react-app/

RUN npm install 

COPY ./ ./

CMD ["npm","run","start"] 

