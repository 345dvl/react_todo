FROM node:16-alpine3.13
WORKDIR /usr/src/app
RUN npm install --save prop-types
RUN npm install -g create-react-app