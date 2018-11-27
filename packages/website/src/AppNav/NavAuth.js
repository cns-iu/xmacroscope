import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import {
  Button, Nav, NavItem, NavLink as NavLinkBootstrap,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavAuth extends Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    const { signOut } = this.props;
    signOut();
  }

  render() {
    const { isAllowed, userEmail } = this.props;
    return (
      <Nav>
        {/* Login/Logout button */}
        <Fragment>
          {
            isAllowed('admin')
              ? (
                <NavItem>
                  <NavLink
                    className="nav-link"
                    to="/admin"
                  >
                    Admin
                  </NavLink>
                </NavItem>
              )
              : ''
          }
          <NavItem>
            <NavLinkBootstrap disabled>
              {userEmail}
            </NavLinkBootstrap>
          </NavItem>
          <Button
            outline
            color="primary"
            onClick={this.signOut}
          >
            Logout
          </Button>
        </Fragment>
      </Nav>
    );
  }
}

NavAuth.propTypes = {
  isAllowed: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
};

NavAuth.defaultProps = {
  userEmail: '',
};

export default NavAuth;
