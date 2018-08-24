import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Card, Container, Navbar, NavbarBrand } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/darkly/bootstrap.css';
import AppRoutes from './AppRoutes';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">AISL / xMacroscope</NavbarBrand>
      </Navbar>
      <br />
      <Container fluid>
        <Card body>
          <AppRoutes />
        </Card>
      </Container>
    </div>
  </BrowserRouter>
);

export default App;
