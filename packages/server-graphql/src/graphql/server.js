/* eslint-disable global-require,no-console,no-new */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { createServer } from 'http';
import fs from 'fs';
import chalk from 'chalk';
import resolvers from './resolvers';
import TYPES from './schema/types/index.graphql';
import QUERIES from './schema/queries/index.graphql';
import MUTATIONS from './schema/mutations/index.graphql';
import SUBSCRIPTIONS from './schema/subscriptions/index.graphql';

//
// Environment setup
//
// Load environment variables from .env on development setups
// We handle environment variables with PM2 on production systems.
//
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//
// SQLite setup
//
// If the database dialect is set to sqlite, check for an existing storage
// file. Create one if it doesn't exist.
//
if (process.env.DB_DIALECT === 'sqlite') {
  const { spawnSync } = require('child_process');
  const sqliteStorage = path.join(
    __dirname,
    `../../private/${process.env.DB_STORAGE}`,
  );
  try {
    fs.accessSync(sqliteStorage, fs.constants.R_OK | fs.constants.W_OK);
    console.log(chalk.yellow('A SQLite database file already exists. Leaving it intact.'));
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(chalk.blue('The defined SQLite file doesn\'t exist.\n'
        + `Creating the SQLite db at ${sqliteStorage}.`));
      const initialize = spawnSync('npm', ['run', 'initialize-db']);
      console.log(`Initializing db: ${initialize.stdout.toString()}`);
    } else {
      console.log(chalk.red('Unknown error: ', err.code));
    }
  }
}

//
// Setup Express to serve GraphQL and (in-production) client apps
//
const PORT = process.env.PORT || '4000';
const app = express();

//
// Serve client apps
//
const startPath = '/start';
const imagesPath = '/images';
const mavPath = '/mav';
const publicPath = '/public';
app.use(startPath, express.static(path.join(__dirname, '../../../client-run/build')));
app.use(imagesPath, express.static(path.join(__dirname, '../../../client-run/public')));
app.use(mavPath, express.static(path.join(__dirname, '../../../client-mav/dist/client-mav')));
app.use(publicPath, express.static(path.join(__dirname, '../../public')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

//
// Setup GraphQL endpoint
//
const server = new ApolloServer({
  typeDefs: [TYPES, QUERIES, MUTATIONS, SUBSCRIPTIONS],
  resolvers,
});

// Add our middle-wares
server.applyMiddleware({ app });

// Start http server for GraphQL
const httpServer = createServer(app);

// Add subscriptions to GraphQL server
server.installSubscriptionHandlers(httpServer);

// Add a listener for the server, and advertise various endpoints
httpServer.listen(PORT, () => {
  console.log(chalk.greenBright(
    `GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`,
  ));
  console.log(chalk.greenBright(
    `Message subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`,
  ));
  console.log(chalk.greenBright(
    `xMacroscope server ready at http://localhost:${PORT}`,
  ));
  console.log();
});
