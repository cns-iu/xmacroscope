import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { withClientState } from 'apollo-link-state';
import { resolvers, defaults } from './App/resolvers';

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}/graphql`,
});

const typeDefs = `
  type Query {
    activeRace: ActiveRace
  }

  type ActiveRace {
    opponent: String!
    opponentName: String!
    secondthing: String!
    status: String!
  }
`;

const stateLink = withClientState({
  resolvers,
  defaults,
  cache: new InMemoryCache(),
  typeDefs,
});

const graphQLClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    stateLink,
    httpLink,
  ]),
});

export default graphQLClient;
