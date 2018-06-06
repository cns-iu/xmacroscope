import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';

const UPDATE_RUN = gql`
  mutation UpdateRunLocal($status: String!, $opponent: String!) {
    updateRunLocal(status: $status, opponent: $opponent) @client
  }
`;

const OpponentSelectButton = ({ opponentName }) => (
  <Mutation
    mutation={UPDATE_RUN}
    variables={{ status: 'preRunningTimer', opponent: opponentName }}
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
};

export default OpponentSelectButton;
