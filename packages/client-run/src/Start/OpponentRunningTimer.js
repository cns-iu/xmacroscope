import React from 'react';
import { Row, Col } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';

const GET_OPPONENT_TIME = gql`
  query {
    activeRace @client {
      opponentTime
    }
  }
`;

function OpponentRunningTimer() {
  return (
    <Query query={GET_OPPONENT_TIME}>
      {({ loading, error, data: { activeRace } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { opponentTime } = activeRace;
        return (
          <Col>
            <Row>
              <Col>
                <h3>Opponent race time</h3>
                <Timer
                  direction="up"
                  start={0}
                  end={opponentTime}
                /> milliseconds
              </Col>
            </Row>
          </Col>
        );
      }}
    </Query>
  );
}

export default OpponentRunningTimer;
