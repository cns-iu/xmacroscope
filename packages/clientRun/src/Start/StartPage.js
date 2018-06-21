//
// Start kiosk page
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import gql from 'graphql-tag';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import AppState from '../App/AppState';

const GET_RACE_STATE_LOCAL = gql`
  query {
    activeRace @client {
      opponent
      opponentName
      opponentTime
      raceId
      status
    }
  }
`;

function StartPage() {
  return (
    <Query query={GET_RACE_STATE_LOCAL}>
      {({ loading, error, data: { activeRace } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <Row>
            <Col>
              {{
                opponentSelect: <OpponentSelect />,
                runTimerPre: <RunningTimerPre
                  opponent={activeRace.opponent}
                  opponentName={activeRace.opponentName}
                />,
                running: <Running />,
                postRunTimer: <RunningTimerPost />,
                falseStart: <div>False start</div>,
              }[activeRace.status]}
            </Col>
            <Col xs={3}>
              <AppState activeRace={activeRace} />
            </Col>
          </Row>
        );
      }}
    </Query>
  );
}

export default StartPage;
