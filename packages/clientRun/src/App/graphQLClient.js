import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset';
import { setContext } from 'apollo-link-context';

/**
 * Load GraphQL endpoint from env var
 */
const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL;

/**
 * Get Auth token and send it as a header for the GraphQL request
 *
 * This will allow us to validate the user on the server for each query
 */
const httpLink = new HttpLink({
  uri: `${graphqlUrl}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const auth = new Auth();
  const token = auth.getAccessToken();
  // TODO: Handle anon. situations better
  // We shouldn't need to send along the auth header with a null value when
  // anon. visitors send gql requests.
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
});

/**
 * Establish the Apollo Client connection with our GraphQL server
 */
const graphQLClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default graphQLClient;
