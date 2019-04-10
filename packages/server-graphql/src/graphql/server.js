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
  const sqlite = require('sqlite3');
  const { spawnSync } = require('child_process');
  const sqliteStorage = path.join(
    __dirname,
    `../../private/${process.env.DB_STORAGE}`,
  );
  fs.access(sqliteStorage, (err) => {
    if (err === null) {
      console.log(chalk.yellow('A SQLite database file already exists. '
        + 'Leaving it intact.'));
    } else if (err.code === 'ENOENT') {
      console.log(chalk.blue('The defined SQLite file doesn\'t exist.\n'
        + `Creating the SQLite db at ${sqliteStorage}.`));
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

  const cron = require('node-cron');
  const shell = require('shelljs');
  const script = process.env.MIGRATION_MODE === 'import' ? `../../scripts/import.sh ` : `../../scripts/export.sh `
  const cmd = path.join(
    __dirname,
    script
  );

  cron.schedule('0,5,10,15,20,25,30,35,40,45,50,55 * * * *', () => {
    shell.exec(cmd + sqliteStorage);
  });
}

//
// Setup Express to serve GraphQL and (in-production) client apps
//
const PORT = process.env.PORT || '4000';
const app = express();

//
// Serve client apps in production
//
const startPath = '/start';
const mavPath = '/mav';
if (process.env.NODE_ENV === 'production') {
  app.use(startPath, express.static(path.join(__dirname, '../../../client-run/build')));
  app.use(mavPath, express.static(path.join(__dirname, '../../../client-mav/dist/client-mav')));
}

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
  if (process.env.NODE_ENV === 'production') {
    console.log(chalk.greenBright(
      `Start line app ready at http://localhost:${PORT}${startPath}`,
    ));
    console.log(chalk.greenBright(
      `Make-a-Vis app ready at http://localhost:${PORT}${mavPath}`,
    ));
    console.log();
  }
});
