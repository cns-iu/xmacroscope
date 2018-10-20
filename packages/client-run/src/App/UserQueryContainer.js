/**
 * Top level signup component
 *
 * Detect if an authenticated user exists in the server DB.
 * If they don't direct them to the signup page, otherwise direct them home.
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import _ from 'lodash';
import AppNav from './Nav/AppNav';
import AppRoutes from './AppRoutes';

// Auth
const auth = new Auth();

/**
 */
class UserLoader extends React.Component {
  componentDidMount() {
    this.props.data.refetch();
  }

  render() {
    if (this.props.data.loading) {
      return <Loading />;
    }
    /**
     * Build an array of roles for the user. User by nav and routes.
     *
     * Double check a user's roles by checking for the access_token
     * This handles a situation where we've deleted the access_token
     * during a logout operation. The user won't be required yet and without
     * checking for an empty access_token the system can initially think that
     * the user still has the previous roles.
     */
    const tokenAbsent = !_.has(localStorage, 'access_token');
    const roles = _.isNull(this.props.data.user) || tokenAbsent ?
      ['anon'] :
      _.map(this.props.data.user.roles, 'name');

    return (
      <Fragment>
        {/* Primary navigation */}
        <AppNav {...this.props} roles={roles} auth={auth} />

        <hr />

        {/* Routes */}
        <AppRoutes {...this.props} roles={roles} auth={auth} />
      </Fragment>
    );
  }
}

UserLoader.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    refetch: PropTypes.func.isRequired,
  }).isRequired,
};

const UserQueryContainer = graphql(AUTH_USER)(UserLoader);

export default UserQueryContainer;
