import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import { Row, Col, Button } from 'reactstrap';
import START_RUN from './graphql/StartRun.graphql';

const OpponentStartButton = ({ race }) => {
  const handleMutationCompleted = () => {
    console.log('mutation done');
  };

  return (
    <Mutation
      onCompleted={handleMutationCompleted}
      mutation={START_RUN}
      variables={{ start: '2018-03-23', opponent: 'thing' }}
      update={(cache) => {
        cache.writeData({
          data: {
            race: {
              opponent: '',
              status: 'running',
            }
          },
        });
      }}
    >
      {(sendMessage, { loading, error }) => (
        <Fragment>
          <Button color="primary" onClick={sendMessage}>
            Start your race against {race.opponent}
          </Button>
          {loading && ''}
          {error && <p>Error :( Please try again</p>}
        </Fragment>
      )}
    </Mutation>
  );
};

OpponentStartButton.propTypes = {
  race: PropTypes.object.isRequired,
};

export default OpponentStartButton;
