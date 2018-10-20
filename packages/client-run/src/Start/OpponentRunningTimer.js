import React from 'react';
import { Row, Col } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';

const GET_OPPONENT_TIME = gql`
  query {
    activeRun @client {
      opponentTime
    }
  }
`;

function OpponentRunningTimer() {
  return (
    <Query query={GET_OPPONENT_TIME}>
      {({ loading, error, data: { activeRun } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { opponentTime } = activeRun;
        return (
          <Col>
            <Row>
              <Col>
                <h3>Opponent time</h3>
                <Timer
                  direction="up"
                  start={0}
                  end={opponentTime}
                  displayTimer
                />
              </Col>
            </Row>
          </Col>
        );
      }}
    </Query>
  );
}

export default OpponentRunningTimer;
