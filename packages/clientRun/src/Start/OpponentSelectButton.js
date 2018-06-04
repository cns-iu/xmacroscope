import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';

const UPDATE_RUN = gql`
  mutation UpdateRun($status: String!, $opponent: String!) {
    updateRun(status: $status, opponent: $opponent) @client
  }
`;

const OpponentSelectButton = ({ opponentName }) => (
  <Mutation
    mutation={UPDATE_RUN}
    variables={{ status: 'running', opponent: opponentName }}
  >
    {updateRun => (
      <Button
        color="primary"
        onClick={updateRun}
      >
        {opponentName}
      </Button>
    )}
  </Mutation>
);

OpponentSelectButton.propTypes = {
  opponentName: PropTypes.string.isRequired,
};

export default OpponentSelectButton;
