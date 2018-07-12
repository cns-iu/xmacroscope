import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';

const UPDATE_RUN_LOCAL = gql`
  mutation updateRace($status: String!) {
    updateRace(status: $status) @client
  }
`;

function RunningTimerTimeout(props) {
  const { raceTimeout } = props;
  return (
    <Mutation
      mutation={UPDATE_RUN_LOCAL}
      variables={{
        status: 'postRunTimer',
      }}
    >
      {updateRace => (
        <Fragment>
          <Timer
            completion={() => {
              updateRace();
            }}
            direction="down"
            start={raceTimeout}
            end={0}
          /> milliseconds
        </Fragment>
      )}
    </Mutation>
  );
}

RunningTimerTimeout.propTypes = {
  raceTimeout: PropTypes.number.isRequired,
};

export default RunningTimerTimeout;

