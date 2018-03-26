import PropTypes from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';
import SEND_MESSAGE from './graphql/SendMessage.graphql';

const OpponentSelectButton = ({ opponentName }) => {
  const handleMutationCompleted = () => {
    console.log('mutation done');
  };

  return (
    <Mutation
      onCompleted={handleMutationCompleted}
      mutation={SEND_MESSAGE}
      variables={{ type: 'thing', timestamp: '2018-03-23' }}
    >
      {(sendMessage, { loading, error }) => (
        <div>
          <Button color="primary" onClick={sendMessage}>
            {opponentName}
          </Button>
          {loading && ''}
          {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};

export default OpponentSelectButton;

OpponentSelectButton.propTypes = {
  opponentName: PropTypes.string.isRequired,
};
