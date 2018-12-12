import {
  Col, Nav, NavItem, NavLink, Row,
} from 'reactstrap';
import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

function AppNav() {
  return (
    <Row>
      <Col>
        <Nav className="justify-content-center">
          <NavItem><NavLink to="/tech" tag={RRNavLink}>Technology overview</NavLink></NavItem>
          <NavItem><NavLink to="/experience" tag={RRNavLink}>Exhibit experience</NavLink></NavItem>
          <NavItem><NavLink to="/research" tag={RRNavLink}>Research</NavLink></NavItem>
        </Nav>
      </Col>
    </Row>
  );
}

export default AppNav;
