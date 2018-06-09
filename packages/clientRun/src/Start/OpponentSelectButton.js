//
// Mutate local state, changing race state to preRun and define opponent
//
import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';

const UPDATE_RACE_OPPONENT = gql`
  mutation UpdateRaceOpponent(
  $status: String!,
  $opponent: String!,
  $opponentTime: Int!
  ) {
    updateRace(
      status: $status,
      opponent: $opponent
      opponentTime: $opponentTime
    ) @client
  }
`;

const OpponentSelectButton = ({ opponentName, opponentTime }) => (
  <Mutation
    mutation={UPDATE_RACE_OPPONENT}
    variables={{
    status: 'preRunTimer',
    opponent: opponentName,
    opponentTime,
  }}
  >
    {updateRace => (
      <Button color="primary" onClick={updateRace}> {opponentName} </Button>
    )}
  </Mutation>
);

OpponentSelectButton.propTypes = {
  opponentName: PropTypes.string.isRequired,
  opponentTime: PropTypes.number.isRequired,
};

export default OpponentSelectButton;
