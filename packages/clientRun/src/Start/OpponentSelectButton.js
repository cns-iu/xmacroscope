import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';

const UPDATE_RUN = gql`
  mutation UpdateRunLocal(
  $status: String!,
  $opponent: String!,
  $opponentTime: Int!
  ) {
    updateRunLocal(
      status: $status,
      opponent: $opponent
      opponentTime: $opponentTime
    ) @client
  }
`;

const OpponentSelectButton = ({ opponentName, opponentTime }) => (
  <Mutation
    mutation={UPDATE_RUN}
    variables={{
      status: 'preRunningTimer',
      opponent: opponentName,
      opponentTime,
    }}
  >
    {updateRunLocal => (
      <Button
        color="primary"
        onClick={updateRunLocal}
      >
        {opponentName}
      </Button>
    )}
  </Mutation>
);

OpponentSelectButton.propTypes = {
  opponentName: PropTypes.string.isRequired,
  opponentTime: PropTypes.number.isRequired,
};

export default OpponentSelectButton;
