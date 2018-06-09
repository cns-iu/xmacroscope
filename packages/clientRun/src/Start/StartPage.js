import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Row, Col } from 'reactstrap';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import AppState from '../App/AppState';

// Local state
// Store selected opponent
const GET_RACE = gql`
  query {
    currentRace @client {
      opponent
      opponentTime
      raceId
      status
    }
  }
`;

function StartPage() {
  return (
    <Query query={GET_RACE}>
      {({ loading, error, data: { currentRace } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Row>
            <Col>
              {{
                startup: <OpponentSelect />,
                preRunTimer: <RunningTimerPre />,
                running: <Running />,
                postRunTimer: <RunningTimerPost />,
                falseStart: <div>False start</div>,
              }[currentRace.status]}
            </Col>
            <Col xs={3}>
              <AppState currentRace={currentRace} />
            </Col>
          </Row>
        );
      }}
    </Query>
  );
}

export default StartPage;
