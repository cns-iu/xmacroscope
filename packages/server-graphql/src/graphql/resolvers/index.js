import { combineResolvers } from 'apollo-resolvers';
import { GraphQLDateTime } from 'graphql-iso-date';
import Subscription from './subscription';
import MessageResolver from './message';
import RunResolver from './run';
import SettingResolver from './setting';

const scalarResolvers = {
  Date: GraphQLDateTime,
};

const resolvers = combineResolvers([
  scalarResolvers,
  MessageResolver,
  RunResolver,
  SettingResolver,
  Subscription,
]);

export default resolvers;
