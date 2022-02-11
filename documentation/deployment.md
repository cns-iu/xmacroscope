# Deployment using Docker

## Commands:

### Install Docker

Varies by platform.

### Pull the latest xmacroscope docker image

    docker pull ghcr.io/cns-iu/xmacroscope:main

You can always get the latest version by running this command again.

### Make a directory for storing the run database locally

    mkdir -p private

### Start the xmacroscope server (advertised on port 8080)

    docker run -it -p 8080:8080 --restart unless-stopped --mount type=bind,source="$(pwd)"/private,target=/usr/src/app/packages/server-graphql/private -t ghcr.io/cns-iu/xmacroscope:main

Replace `-it` with `-d` if you wish for it to run as a daemon process

## Other commands

### Build and deploy locally from source

From the root of this repository run

```bash
docker build . -t xmacroscope

docker run -d -p 8080:8080 --mount type=bind,source="$(pwd)"/packages/server-graphql/private,target=/usr/src/app/packages/server-graphql/private -t xmacroscope
```
