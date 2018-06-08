import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';

const GET_RACE = gql`
  query {
    currentRace @client {
      opponent
      opponentTime
      status
    }
  }
`;

function OpponentRunningTimer() {
  return (
    <Query query={GET_RACE}>
      {({ loading, error, data: { currentRace } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Col>
            <Row>
              <Col>
                <h3>Opponent race time</h3>
                <Timer
                  completion={() => {
                    console.log('Opponent end');
                  }}
                  direction="up"
                  start={0}
                  end={currentRace.opponentTime}
                /> milliseconds
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  disabled
                >
                  Opponent finish
                </Button>
              </Col>
            </Row>
          </Col>
        );
      }}
    </Query>
  );
}

export default OpponentRunningTimer;
