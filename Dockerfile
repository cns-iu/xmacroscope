FROM node:14 AS build
WORKDIR /usr/src/app
RUN apt update && apt install -y sqlite3
RUN npm install -g npm-run-all rimraf npm@7
COPY . .
RUN npm-run-all setup clean install:mav build:mav
RUN npm install -g npm@6
RUN npm-run-all install:run install:server
RUN npm-run-all build:run build:server
RUN rm -rf packages/client-run/node_modules packages/client-mav/node_modules

FROM node:14
RUN apt update && apt install -y sqlite3
ENV NODE_ENV production
ENV PORT 8080
USER node
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app .
EXPOSE 8080
CMD [ "npm", "start" ]
