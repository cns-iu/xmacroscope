import {
  Nav, NavItem, NavLink,
} from 'reactstrap';
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

function AppNav() {
  return (
    <Nav className="justify-content-center">
      <NavItem><NavLink exact to="/" tag={RRNavLink}>Home</NavLink></NavItem>
      <NavItem><NavLink to="/research" tag={RRNavLink}>Research</NavLink></NavItem>
      <NavItem><NavLink to="/media" tag={RRNavLink}>Media</NavLink></NavItem>
      <NavItem><a className="nav-link" href="demo" rel="noopener noreferrer">Demo</a></NavItem>
      <NavItem><a className="nav-link" href="site-visualizations" rel="noopener noreferrer">Site Visualizations</a></NavItem>
    </Nav>
  );
}

export default AppNav;
