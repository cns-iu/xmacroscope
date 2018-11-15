/* eslint-disable global-require,no-console,no-new */
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import cors from 'cors';
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
  const sqlite = require('sqlite3');
  const { spawnSync } = require('child_process');
  const sqliteStorage = path.join(
    __dirname,
    `../../private/${process.env.DB_STORAGE}`,
  );
  fs.access(sqliteStorage, (err) => {
    if (err === null) {
      console.log(chalk.yellow('A SQLite database file already exists. ' +
        'Leaving it intact.'));
    } else if (err.code === 'ENOENT') {
      console.log(chalk.blue('The defined SQLite file doesn\'t exist.\n' +
        `Creating the SQLite db at ${sqliteStorage}.`));
      new sqlite.Database(sqliteStorage);
      // Populate database using Sequelize CLI
      const migrate = spawnSync('node_modules/.bin/sequelize', ['db:migrate']);
      console.log(`SQLite running migrations: ${migrate.stdout.toString()}`);
      const seed = spawnSync('node_modules/.bin/sequelize', ['db:seed:all']);
      console.log(`SQLite running seeders: ${seed.stdout.toString()}`);
    } else {
      console.log(chalk.red('Unknown error: ', err.code));
    }
  });
}

// GraphQL port
const DEFAULT_PORT = 4000;
const PORT = process.env.PORT || DEFAULT_PORT;

//
// Setup Express to server the GraphQL API
//
const app = express();

//
// CORS
//
// Expect connections from our client application
// We use CORS here since our client application is
// hosted at a seperate origin. We need to explicitly allows
// cross-origin requests otherwise the browser will throw
// an error.
//
// app.use('*', cors({ origin: process.env.CLIENT_ORIGIN }));

//
// Serve other apps
//
// TODO: Break these out into their own servers via a proxy
// Possibly bit clunky to have them here within the GraphQL endpoint.

// SMM run logic
app.use('/', express.static(path.join(__dirname, '../../../client-run/build')));

// Make-a-Viz compiled project path
app.use('/mav', express.static(path.join(__dirname, '../../../client-mav/dist/client-mav')));

//
// Setup GraphQL endpoint with GUI for development
// TODO: Only host GUI on dev
//
const server = new ApolloServer({
  typeDefs: [TYPES, QUERIES, MUTATIONS, SUBSCRIPTIONS],
  resolvers,
});

// Add our middlewares
server.applyMiddleware({ app });

// Start http server for GraphQL
const httpServer = createServer(app);

// Add subscriptions to our existing GraphQL server
server.installSubscriptionHandlers(httpServer);

// Add a listener for our server on the correct ports
httpServer.listen(PORT, () => {
  console.log(`GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
