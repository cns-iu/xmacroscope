import PropTypes from 'prop-types';
import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Button } from 'reactstrap';

const OpponentSelectButton = ({ opponentName }) => (
  <ApolloConsumer>
    {cache => (
      <Button
        color="primary"
        onClick={() => cache.writeData({ data: { opponent: opponentName } })
        }
      >
        {opponentName}
      </Button>
    )}
  </ApolloConsumer>
);

OpponentSelectButton.propTypes = {
  opponentName: PropTypes.string.isRequired,
};

export default OpponentSelectButton;
