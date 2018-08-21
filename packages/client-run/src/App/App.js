import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import AppRoutes from './AppRoutes';

const App = () => (
  <BrowserRouter>
    <Container fluid>
      <AppRoutes />
    </Container>
  </BrowserRouter>
);

export default App;
