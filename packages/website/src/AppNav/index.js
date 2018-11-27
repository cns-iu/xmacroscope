import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
} from 'reactstrap';
import React, { Fragment } from 'react';
import includes from 'lodash.includes';
import NavPrimary from './NavPrimary';
import NavAuth from './NavAuth';

class AppNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { isOpen } = this.state;
    const {
      roles, isAuthorized, signOut, userEmail,
    } = this.props;
    const isAllowed = requiredRole => includes(roles, requiredRole);

    return (
      <div>
        <Navbar
          color="light"
          light
          expand="md"
        >
          <NavbarBrand className="mx-auto" href="/">Atrium</NavbarBrand>
          {
            isAuthorized() && (
              <Fragment>
                <NavbarToggler onClick={this.toggle} />
                <Collapse
                  isOpen={isOpen}
                  navbar
                >
                  <NavPrimary />
                  <NavAuth
                    userEmail={userEmail}
                    signOut={signOut}
                    isAllowed={isAllowed}
                  />
                </Collapse>
              </Fragment>
            )
          }
        </Navbar>
      </div>
    );
  }
}

AppNav.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAuthorized: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
};

AppNav.defaultProps = {
  userEmail: '',
};

export default AppNav;
