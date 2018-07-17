import PropTypes from 'prop-types';
import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { Button } from 'reactstrap';

const OpponentResetButton = () => (
  <ApolloConsumer>
    {cache => (
      <Button
        color="warning"
        onClick={() => cache.writeData({ data: { opponent: '' } })
        }
      >
        Reset
      </Button>
    )}
  </ApolloConsumer>
);

export default OpponentResetButton;
