# Setup instructions

## Requirements

Node >= 10


## Install Global Dependencies
NPM or Yarn is used as a package manager and Angular CLI is used for the CNS UI components
```
npm install --global yarn # Optional
npm install --global @angular/cli
```

## Bootstrap the project
Download the latest code and bootstrap the project with Lerna.

This will install all the required projects in each project and link required binaries.
```
git clone git@github.com:cns-iu/xmacroscope.git
cd xmacroscope
npm install
```

## Setup environment
### Client
```
cp packages/client-run/env.development.example packages/client-run/.env.development
```
REACT_APP_GRAPHQL_URL: Leave at the default unless you're running the GraphQL in a unique location.
REACT_APP_LOCATION: Select a location for your installation. Options can be found in the `packages/server-graphql/src/db/seeders/*-demo-settings.js` file
### Server
```
cp packages/server-graphql/env.example packages/server-graphql/.env
```
Unless you're deploying this to a server, you should keep all the defaults.

# Running the application

In the project root directory:
```
npm start
```
This will run all of the start processes concurrently, streaming output data from each to the terminal. Each processess' output will be prefixed with its name.

## Running the application loaclly
During development you may want to MAV system to point to the database sever, rather than its internal mocking data source.

To do this start each package separately, using `npm run start-local` in the MAV package.

Once the local graphql server is stable we'll simplify this process into a dev and production environment.
