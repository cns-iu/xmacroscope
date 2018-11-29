import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootswatch/dist/darkly/bootstrap.css';
import AppRoutes from './AppRoutes';

//
// In production, the server-graphql express server hosts the app from the '/start' directory.
//
const basename = process.env.NODE_ENV === 'development' ? '/' : '/start';

const App = () => (
  <BrowserRouter basename={basename}>
    <div className="base-container">
      <Container fluid>
        <AppRoutes />
      </Container>
    </div>
  </BrowserRouter>
);

export default App;
