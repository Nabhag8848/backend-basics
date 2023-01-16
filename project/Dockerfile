# Specify the base image
FROM node:16-alpine

WORKDIR /usr/app/

# Installing dependencies
COPY ./package.json /usr/app/
RUN npm install
COPY ./ /usr/app/

# Command to run when container starts
CMD [ "npm", "start" ]

