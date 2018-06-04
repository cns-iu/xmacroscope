import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppNav from './Nav/AppNav';
import AppRoutes from './AppRoutes';

const App = () => (
  <BrowserRouter>
    <Container fluid>

      <AppNav {...this.props} />
      <hr />
      <AppRoutes />

    </Container>
  </BrowserRouter>
);

export default App;
