/**
 * Display the user's username
 *
 * This could be an email, a username, or their real name, depending on
 * our available data.
 */
import React, { Fragment } from 'react';

class UserName extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.data.loading) {
      return <Fragment>&nbsp;</Fragment>
    }
    const username = this.props.data.user.email;
    return (
      <div>
        { username }
      </div>
    );
  }
}

export default UserName;
