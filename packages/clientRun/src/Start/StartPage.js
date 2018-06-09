import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';
import Running from './Running';
import RunningTimerPost from './RunningTimerPost';
import AppState from '../App/AppState';
import GET_RACE_STATE_LOCAL from './graphql/GetRaceStateLocal.graphql';

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
                startup: <OpponentSelect />,
                preRunTimer: <RunningTimerPre />,
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
