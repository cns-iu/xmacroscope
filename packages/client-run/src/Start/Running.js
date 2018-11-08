//
// Active run timers
//
import React from 'react';
import { Query } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import gql from 'graphql-tag';
import RunnerTimer from './RunnerTimer';
import RunningTimerTimeout from './RunningTimerTimeout';
import { BigHeader } from '../Primatives/BasePrimatives';

const GET_RUN_TIMEOUT = gql`
  query GetRunTimeout($location: String!) {
    Settings(location: $location){
      runTimeout
    }
  }
`;

function Running() {
  return (
    <Query
      query={GET_RUN_TIMEOUT}
      variables={{ location: process.env.REACT_APP_LOCATION }}
    >
      {({ loading, error, data: { Settings } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { runTimeout } = Settings;
        return (
          <Row>
            <Col>

              {/* Running message */}
              <Row>
                <Col className="text-center">
                  <BigHeader className="font-weight-bold">GO!</BigHeader>
                </Col>
              </Row>

              <Row className="text-center">
                <RunnerTimer runTimeout={runTimeout} />
                <RunningTimerTimeout runTimeout={runTimeout} />
              </Row>

            </Col>
          </Row>
        );
      }}
    </Query>
  );
}

export default Running;
