//
// Active race timers
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import gql from 'graphql-tag';
import OpponentRunningTimer from './OpponentRunningTimer';
import RunnerTimer from './RunnerTimer';
import RunningTimerTimeout from './RunningTimerTimeout';

const GET_RACE_TIMEOUT = gql`
  query settings($location: String!) {
    settings(location: $location){
      raceTimeout
    }
  }
`;

function Running() {
  return (
    <Query
      query={GET_RACE_TIMEOUT}
      variables={{ location: process.env.REACT_APP_LOCATION }}
    >
      {({ loading, error, data: { settings } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { raceTimeout } = settings;
        return (
          <Row>
            <Col>

              {/* Running message */}
              <Row>
                <Col className="text-center">
                  <h1 className="font-weight-bold">GO!</h1>
                  <p>Wait for the current runner to finish.</p>
                </Col>
              </Row>

              {/* Runner timers */}
              <Row className="text-center">
                <RunnerTimer
                  raceTimeout={raceTimeout}
                  lane="1"
                />
              </Row>

              {/* Timeout timer */}
              <Row className="mt-4">
                <Col className="text-center">
                  <h3>Run timeout timer</h3>
                  <p>Background timer that resets the running experience
                    if the two runners don&apos;t complete a race.
                  </p>
                  <RunningTimerTimeout raceTimeout={raceTimeout} />
                </Col>
              </Row>

            </Col>
          </Row>
        );
      }}
    </Query>
  );
}

export default Running;
