/* eslint-disable global-require,no-console,no-new */
import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { createServer } from 'http';
import { GraphQLError, execute, subscribe } from 'graphql';
import { formatError as apolloFormatError, createError } from 'apollo-errors';
import schema from './schema/schema';
import db from '../db/models/index';

//
// Environment setup
//
// Load environment variables from .env on development setups
// We handle environment variables with PM2 on production systems.
//
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// GraphQL port
const DEFAULT_PORT = 4000;
const PORT = process.env.PORT || DEFAULT_PORT;

// GraphQL endpoint
//
// Custom URL for the graphql endpoint once it's setup.
// On the local system this would just be a path, which would
// default to constructing the full URL as localhost/path
// However, in production we want to serve the GraphQL server behind
// our HTTPS connection, terminated at our AWS Load Balancer
// before the front end Apache server.
const DEFAULT_ENDPOINT_URL = '/graphql/';
const ENDPOINT_URL = process.env.ENDPOINT_URL || DEFAULT_ENDPOINT_URL;

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
app.use('*', cors({ origin: process.env.CLIENT_ORIGIN }));

//
// Top level error
//
// Unless any other error is matched we will send this for
// all error conditions.
//
const UnknownError = createError('UnknownError', {
  message: 'An unknown error has occurred.  Please try again later',
});

const formatError = (error) => {
  //
  // Log raw errors to the server console
  // TODO: set up file logging for the raw logs.
  // https://github.com/cns-iu/xmacroscope/issues/92
  //
  console.log(error);
  console.log('----^ ^ ^ ^ ^ error ^ ^ ^ ^ ^----');

  //
  // Prepare a formatted error for the client, so that we
  // don't expose any internals about the API or database connection
  // to the client making the GraphQL query.
  //
  let formattedError = apolloFormatError(error);
  if (formattedError instanceof GraphQLError) {
    formattedError = apolloFormatError(new UnknownError({
      data: {
        originalMessage: formattedError.message,
        originalError: formattedError.name,
      },
    }));
  }

  return formattedError;
};

//
// Serve other apps
//
// TODO: Break these out into their own servers via a proxy
// Possibly bit clunky to have them here within the GraphQL endpoint.

// SMM run logic
app.use('/smm', express.static(path.join(__dirname, '../../../client/build')));

// Make-a-Viz compiled project path
app.use('/mav', express.static(path.join(__dirname, '../../../aisl/dist')));

//
// Setup GraphQl endpoint
//
// Use Express to listen for all GraphQL queries at
// the '/graphql' path.
//
// Load the schema and context for each GraphQL request.
//
// TODO - test removing unused param, response
app.use('/graphql', bodyParser.json(), graphqlExpress((request, response) => ({
  schema,
  formatError,
})));

//
// Setup GraphiQl endpoint
//
// Use Express to host an instance of the GraphiQL web GUI
// development tool.
//
// TODO: Only host this on development.
//
app.use('/graphiql', graphiqlExpress({
  endpointURL: ENDPOINT_URL,
  subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
}));

// Start the GraphQL server and populate DB with seed data if empty
const server = createServer(app);
server.listen(PORT, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
    server,
    path: '/subscriptions',
  });

  // Ensure DB tables are created
  db.sequelize.sync();
});

