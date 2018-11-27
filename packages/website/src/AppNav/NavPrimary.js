import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function NavPrimary() {
  return (
    <Nav
      className="mr-auto"
      navbar
    >
      <NavItem>
        <NavLink
          className="nav-link"
          to="/about"
        >
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className="nav-link"
          to="/exhibits"
        >
              Exhibits
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default NavPrimary;
