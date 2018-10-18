//
// Mutate local state, changing run state to preRun and define opponent details
//
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';

const SELECT_RUN = gql`
  mutation RunSelect(
  $run: RunSelect!
  ) {
    runSelect(
      run: $run
    )
  }
`;

const OpponentSelectButton = ({ opponent, opponentName, opponentTime }) => (
  <Mutation
    mutation={SELECT_RUN}
    update={(cache) => {
      cache.writeData({
        data: {
          activeRun: {
            __typename: 'ActiveRun',
            status: 'runTimerPre',
            opponent,
            opponentName,
            opponentTime,
          },
        },
      });
    }}
    variables={{
      run: {
        opponent,
        opponentName,
        opponentTime,
      },
    }}
  >
    {updateRun => (
      <Button
        color="primary"
        onClick={updateRun}
      >{opponentName}
      </Button>
    )}
  </Mutation>
);

OpponentSelectButton.propTypes = {
  opponentName: PropTypes.string.isRequired,
  opponentTime: PropTypes.number.isRequired,
};

export default OpponentSelectButton;
