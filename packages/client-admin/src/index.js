import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from 'react-apollo';
import graphQLClient from './graphQLClient';
import App from './App/App';

const ApolloApp = AppComponent => (
  <ApolloProvider client={graphQLClient}>
    <AppComponent />
  </ApolloProvider>
);

render(
  ApolloApp(App),
  document.getElementById('root'),
);
