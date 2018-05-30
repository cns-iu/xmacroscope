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

This will install all the required projects in each project.

```
git clone git@github.com:cns-iu/xmacroscope.git
cd xmacroscope
lerna bootstrap
```

## Setup environment
TODO - Automate this with a setup script.
```
cp clientRun/env.development.example clientRun/.env.development
cp graphQLServer/env.example graphQLServer/.env
```
Fill out the details in these env files.

## Seed the local database
Seed local data in the database before developing.

TODO - Automate this in a setup script
```bash
cd packages/serverGraphQL/
node_modules/.bin/sequelize db:seed:all
```
