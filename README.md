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

