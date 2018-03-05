import { makeExecutableSchema } from 'graphql-tools';

import { schemaDef } from '../../aisl-graphql/shared/schema';
import { resolvers } from './resolvers';

export const schema = makeExecutableSchema({ typeDefs: schemaDef, resolvers });
