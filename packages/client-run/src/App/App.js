import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootswatch/dist/darkly/bootstrap.css';
import AppRoutes from './AppRoutes';

const App = () => (
  <BrowserRouter>
    <div className="base-container">
      <Container fluid>
        <AppRoutes />
      </Container>
    </div>
  </BrowserRouter>
);

export default App;
