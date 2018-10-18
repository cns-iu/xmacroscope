//
// Active run timers
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
      runTimeout
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
        const { runTimeout } = settings;
        return (
          <Row>
            <Col>

              {/* Running message */}
              <Row>
                <Col>
                  <h1>GO!</h1>
                </Col>
              </Row>

              {/* Runner timers */}
              <Row>
                <OpponentRunningTimer />
                <RunnerTimer
                  runTimeout={runTimeout}
                  lane="1"
                />
              </Row>

              {/* Timeout timer */}
              <Row className="mt-4">
                <Col>
                  <h3>Timeout</h3>
                  <RunningTimerTimeout runTimeout={runTimeout} />
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
