# Setup instructions

## Requirements

Node < 10

Some modules are not compatible with Node v10 yet.

## Install Lerna
We use Lerna to manage dependencies across the different projects.

Install it globally to get started
```
npm install --global lerna
```

## Install Other Global Dependencies
Yarn is used as a package manager and Angular CLI is used for the CNS UI components
```
npm install --global yarn
npm install --global @angular/cli
```

## Bootstrap the project
Download the latest code and bootstrap the project with Lerna.

This will install all the required projects in each project and link required binaries.
```
git clone git@github.com:cns-iu/xmacroscope.git
cd xmacroscope
lerna bootstrap
lerna link
```

## Initialize [@ngx-dino](https://github.com/cns-iu/ngx-dino) Submodule
[@ngx-dino](https://github.com/cns-iu/ngx-dino) is CNS' in development visualization framework. As it is not yet on npm, we reference it from a git submodule.
```
git submodule init
git submodule update
```

## Setup environment
### Client
```
cp client-run/env.development.example client-run/.env.development
```
REACT_APP_GRAPHQL_URL: Leave at the default unless you're running the GraphQL in a unique location.
REACT_APP_LOCATION: Select a location for your installation. Options can be found in the `packages/server-graphql/src/db/seeders/*-demo-settings.js` file
### Server
```
cp graphQLServer/env.example graphQLServer/.env
```
Unless you're deploying this to a server, you should keep all the defaults.

# Running the application

In the project root directory:
```
yarn start
```
This will run all of the start processes concurrently, streaming output data from each to the terminal. Each processess' output will be prefixed with its name.


## Running the application loaclly
During development you may want to MAV system to point to the database sever, rather than its internal mocking data source.

To do this start each package separately, using `yarn ng serve --env=local` in the MAV package.

Once the local graphql server is stable we'll simplify this process into a dev and production environment.
