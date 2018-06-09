import React from 'react';
import {
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar light expand="md">
        <NavbarBrand href="/">xMacroscope</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>

          {/* Left navigation */}
          <Nav className="mr-auto" navbar>
            {/* Anonymous user navigation */}
            <NavItem>
              <Link className="nav-link" to="/start">Starting line kiosk</Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              Location: {process.env.REACT_APP_LOCATION}
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    );
  }
}

export default AppNav;
