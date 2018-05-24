# xMacroscope

<a href="https://app.zenhub.com/workspace/o/cns-iu/xmacroscope"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

## Work In Progress

This repo is a work in progress. Come back later.

## Demo site

<https://cns-iu.github.io/xmacroscope/>

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
```
cd serverGraphQL/
node_modules/.bin/sequelize db:seed:all
```

# Project structure

## Lerna
TODO: Description of how the project is organized into packages with Lerna.

## Packages

 - **aisl**- CNS client application for the Run experience
 - **aisl-api**- GraphQL API for the Run experience
 - **aisl-clientdb**- Client side implemention of the aisl-api, using RxDB
 - **clientRun**- SMM client application for the run experience
 - **dino-core**- CNS @ngx-dino/core visualization framework
 - **dino-geomap**- CNS @ngx-dino/geomap visualization component
 - **dino-scatterplot**- CNS @ngx-dino/scatterplot visualization component
 - **dino-vega**- CNS @ngx-dino/vega visualization integration library
 - **serverGraphQL**- Central server for GraphQL system and database interface
 - **mav**- Make a Viz - The generic part of the Make a Viz experience that can be applied to multiple kinds of exhibits
