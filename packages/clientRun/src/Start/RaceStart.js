import PropTypes from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'reactstrap';
import START_RUN from './graphql/StartRun.graphql';

const RaceStart = ({ opponentName }) => {
  const handleMutationCompleted = () => {
    console.log('mutation done');
  };

  return (
    <Mutation
      onCompleted={handleMutationCompleted}
      mutation={START_RUN}
      variables={{ start: '2018-03-23', opponent: 'thing' }}
    >
      {(sendMessage, { loading, error }) => (
        <div>
          <Button color="primary" onClick={sendMessage}>
            Start race
          </Button>
          {loading && ''}
          {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>
  );
};

export default RaceStart;

RaceStart.propTypes = {
  opponentName: PropTypes.string.isRequired,
};
