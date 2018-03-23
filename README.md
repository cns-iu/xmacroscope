# xMacroscope

<a href="https://app.zenhub.com/workspace/o/cns-iu/xmacroscope"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

## Work In Progress

This repo is a work in progress. Come back later.

## Demo site

<https://cns-iu.github.io/xmacroscope/>

# Setup instructions

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

## Initialize [@ngx-dino](https://github.com/cns-iu/ngx-dino) Submodule
[@ngx-dino](https://github.com/cns-iu/ngx-dino) is CNS' in development visualization framework. As it is not yet on npm, we reference it from a git submodule.
```
git submodule init
git submodule update
```

## Bootstrap the project
Download the latest code and bootstrap all the package dependencies with Lerna.

```
git clone git@github.com:cns-iu/xmacroscope.git
cd xmacroscope
lerna bootstrap
```

## Setup environment
TODO - Automate this with a setup script.
```
cp graphQLServer/env.example graphQLServer/.env
```
Fill out database details.

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
