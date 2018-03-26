import { ApolloProvider } from 'react-apollo';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import graphQLClient from './graphQLClient';
import AppNav from './Nav/AppNav';
import AppRoutes from './AppRoutes';

const App = () => (
  <ApolloProvider client={graphQLClient}>
    <BrowserRouter>
      <Container fluid>

        <AppNav {...this.props} />
        <hr />
        <AppRoutes />

      </Container>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
