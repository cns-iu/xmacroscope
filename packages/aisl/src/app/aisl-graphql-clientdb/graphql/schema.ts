import { makeExecutableSchema } from 'graphql-tools';

import { schemaDef } from 'aisl-api';
import { resolvers } from './resolvers';

export const schema = makeExecutableSchema({ typeDefs: schemaDef, resolvers });
