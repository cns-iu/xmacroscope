//
// Call the StartSignup Mutation on load
// After sending server Mutation, update local run state to { status: signupForm }
//
import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../Loading/Loading';

const START_SIGNUP = gql`
  mutation StartSignup { StartSignup }
`;

class CallSignupStart extends React.Component {
  componentDidMount() {
    const { startSignup } = this.props;
    startSignup();
  }

  render() {
    return <Loading />;
  }
}

CallSignupStart.propTypes = {
  startSignup: PropTypes.func.isRequired,
};

function SignupStart() {
  return (
    <Mutation
      mutation={START_SIGNUP}
      update={(cache) => {
        cache.writeData({
          data: {
            activeRun: {
              __typename: 'ActiveRun',
              status: 'signupForm',
            },
          },
        });
      }}
    >
      {startSignup => (
        <CallSignupStart
          startSignup={startSignup}
        />
      )}
    </Mutation>
  );
}

export default SignupStart;
