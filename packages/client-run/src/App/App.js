import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import 'bootswatch/dist/darkly/bootstrap.css';
import AppRoutes from './AppRoutes';

const App = () => (
  <BrowserRouter>
    <div className="h-100">
      <Container fluid className="h-100 p-5">
        <AppRoutes />
      </Container>
    </div>
  </BrowserRouter>
);

export default App;
