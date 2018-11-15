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

class AppNavAdmin extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Navbar light expand="md">
        <NavbarBrand href="/">xMacroscope</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>

          {/* Left navigation */}
          <Nav className="mr-auto" navbar>
            {/* Anonymous user navigation */}
            <NavItem>
              <Link className="nav-link" to="/admin/start">Signup & Start</Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/admin">Admin</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/admin/start-dev">Dev-Start</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/admin/runs">Runs</Link>
            </NavItem>
            <NavItem>
              Location:
              <br />
              {process.env.REACT_APP_LOCATION}
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    );
  }
}

export default AppNavAdmin;
