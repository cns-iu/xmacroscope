/**
 * Build GraphQL schema from the types, queries, and mutation files
 *
 * Connect the GraphQL schema with the database resolvers.
 */

import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers';
import TYPES from './types/index.graphql';
import QUERIES from './queries/index.graphql';
import MUTATIONS from './mutations/index.graphql';
import SUBSCRIPTION from './subscriptions/index.graphql';

const schema = makeExecutableSchema({
  typeDefs: [TYPES, QUERIES, MUTATIONS, SUBSCRIPTION],
  resolvers,
});

export default schema;
