# Project structure

The xMacroscope system is divided into several packages that handle individual aspects of the experience.

The overall system is run from npm scripts in the root [package.json](https://github.com/cns-iu/xmacroscope/blob/master/package.json)

## Packages
 - **client-mav**- Angular client application for the Make a Visualization exhibit component
 - **client-run**- React client application for signup, exhibit state management, and audio playback.
 - **server-graphql**- Central server for GraphQL system and database interface
 - **website**- Source code for the [xMacroscope.org](https://www.xmacroscope.org/) website.
