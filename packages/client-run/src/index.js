import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import graphQLClient from './graphQLClient';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import './Styles/AppGlobal.css';

const ApolloApp = AppComponent => (
  <ApolloProvider client={graphQLClient}>
    <AppComponent />
  </ApolloProvider>
);

render(
  ApolloApp(App),
  document.getElementById('root'),
);
registerServiceWorker();
