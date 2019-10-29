# Setup instructions

## Requirements

Node >= 10

## Install Global Dependencies
Angular CLI is used for the CNS UI components
```
npm install --global @angular/cli
```

## Bootstrap the project
Download the latest code and bootstrap the project.

This will install all the required dependencies in each project
```
git clone git@github.com:cns-iu/xmacroscope.git
cd xmacroscope
npm install
npm run setup # Initial default setup
```

## Setup environment
### Client
```
cp packages/client-run/env.example packages/client-run/.env
```
REACT_APP_GRAPHQL_URL: Leave at the default unless you're running the GraphQL in a unique location.
REACT_APP_LOCATION: Select a location for your installation. Options can be found in the `packages/server-graphql/src/db/seeders/*-demo-settings.js` file
### Server
```
cp packages/server-graphql/env.example packages/server-graphql/.env
```
Unless you're deploying this to a server, you should keep all the defaults.

# Running the application in development mode

In the project root directory:
```
npm run start-dev
```
This will run all of the start processes concurrently, streaming output data from each to the terminal. Each processes' output will be prefixed with its name.

# Running the application in production mode

In the project root directory:
```
npm run build
```
This will build static versions of the client applications and the server.
```
npm start
```
This will start up the server which will serve the client code and the graphql endpoint.
