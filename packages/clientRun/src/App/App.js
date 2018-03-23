import { ApolloProvider } from 'react-apollo';
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import history from './history';
import graphQLClient from './graphQLClient';
import store from './store';
import AppNav from './Nav/AppNav';
import AppRoutes from './AppRoutes';

const App = () => (

  // Top level connection to the GraphQL server
  <ApolloProvider client={graphQLClient}>

    {/* App level state via Redux */}
    <Provider store={store}>

      {/* Keep react-router and Redux in sync */}
      <ConnectedRouter history={history}>
        <Container fluid>

          <AppNav {...this.props} />

          <hr />

          {/* Routes */}
          <AppRoutes />

        </Container>
      </ConnectedRouter>

    </Provider>
  </ApolloProvider>
);

export default App;
