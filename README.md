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
 - **aisl-api**- Client API connecting to server db and client db
 - **aisl-clientdb**- Client side DB mocker, using RxDB
 - **clientRun**- SMM client application for the run experience
 - **dino-core**- CNS core visualization system
 - **dino-geomap**- CNS geomap visualization library
 - **dino-scatterplot**- CNS scatterplot visualization library
 - **dino-vega**- CNS visualization library - Vega interface
 - **serverGraphQL**- Central server for GraphQL system and database interface
 - **mav**- Make a Viz - A group of tools that give visitors the ability to create a visualization.
