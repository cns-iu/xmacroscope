import { Navbar, NavbarBrand } from 'reactstrap';
import React from 'react';

function AppNav() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand className="mx-auto" href="/"> xMacroscope </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default AppNav;
