import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import '../Styles/AppGlobal.css';
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
        <AppRoutes />
      </Container>
    </div>
  </BrowserRouter>
);

export default App;
