## Download node specific image with alpine version
FROM node:17-alpine3.12

## Defines the location where the application will stay on the container's disk 
WORKDIR /ui

## Copy "package.json" and "package-lock.json" to the directory created by the "workir" command 
COPY package*.json ./

## Install project dependencies
RUN npm install

## Copy everything into the directory, ignoring node_modules. Because, there's the rule in dockerignore
COPY . . 

## Container listens for access on port 8080
EXPOSE 8080

## Run the npm start command to start the script that is in package.json
CMD npm run dev
