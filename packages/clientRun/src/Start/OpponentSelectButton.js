import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';
import SEND_MESSAGE from './graphql/SendMessage.graphql';

const Start = () => (
  <Mutation
    mutation={SEND_MESSAGE}
    variables={{ type: 'thing', timestamp: '2018-03-23' }}
  >
    {(sendMessage, { loading, error }) => (
      <div>
        <Button color="primary" onClick={sendMessage}>
          Send defeault message
        </Button>
        {loading && <p>Loading...</p>}
        {error && <p>Error :( Please try again</p>}
      </div>
    )}
  </Mutation>
);

export default Start;
