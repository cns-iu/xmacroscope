# xMacroscope.org website
Public website for the xMacroscope project

## Deploy
### Google Analytics setup
Create `.env` files and then define the website Google Analytics ID in that `.env` file.

```bash
cp /packages/website/env.example /packages/website/.env
```
### Build and push to remote web server
```bash
cd /packages/website
npm run build
rsync -avzh build/ example.org:/path/to/docroot
```
