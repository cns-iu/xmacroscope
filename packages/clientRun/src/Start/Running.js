//
// Active race timers
//
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import { Row, Col } from 'reactstrap';
import gql from 'graphql-tag';
import Timer from './Timer';
import OpponentRunningTimer from './OpponentRunningTimer';
import RunnerTimer from './RunnerTimer';

const GET_RACE_TIMEOUT = gql`
  query settings($location: String!) {
    settings(location: $location){
      raceTimeout
    }
  }
`;

const FINISH_RUN = gql`
  mutation RunUpdate(
  $run: FinishRunRecord!
  ) {
    runFinish(
      run: $run
    )
  }
`;

const UPDATE_RUN_LOCAL = gql`
  mutation updateRace($status: String!) {
    updateRace(status: $status) @client
  }
`;

class Running extends React.Component {
  constructor(props) {
    super(props);
    this.onTimerCompleted = this.onTimerCompleted.bind(this);
  }

  onTimerCompleted(runFinish) {
    // TODO: enable timeout timer in sync with lane timers
    runFinish({
      variables: {
        run: {
          id: 3,
          finish: new Date().toLocaleString(),
        },
      },
    }).then((mutationResult) => {
      console.log(mutationResult.data.runFinish);
      console.log('----^ ^ ^ ^ ^ mutationResult.data.runFinish ^ ^ ^ ^ ^----');
    });
  }

  // Get race timeout setting and pass it to children timers
  render() {
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
                  <Col>
                    <h1>Running display</h1>
                    <p>A race has started.</p>
                    <p>Once both runners cross the finish line the race will
                      complete.
                    </p>
                    <p>If neither runner crosses the finish line by the
                      timeout,
                      the race will complete.
                    </p>
                  </Col>
                </Row>

                {/* Runner timers */}
                <Row>
                  <OpponentRunningTimer />
                  <RunnerTimer
                    raceTimeout={raceTimeout}
                    lane="1"
                  />
                </Row>

                {/* Timeout timers */}
                <Row className="mt-4">
                  <Col>
                    <h3>Run timeout timer</h3>
                    <p>Background timer that resets the running experience
                      if the two runners don&apos;t complete a race.
                    </p>
                    <Mutation
                      mutation={UPDATE_RUN_LOCAL}
                      variables={{
                        status: 'postRunTimer',
                      }}
                    >
                      {updateRace => (
                        <Fragment>
                          <Timer
                            completion={() => {
                              updateRace();
                            }}
                            direction="down"
                            start={raceTimeout}
                            end={0}
                          /> milliseconds
                        </Fragment>
                      )}
                    </Mutation>
                  </Col>

                </Row>

              </Col>
            </Row>
          );
        }}
      </Query>
    );
  }
}

Running.propTypes = {
  propItem: PropTypes.string,
};

Running.defaultProps = {
  propItem: '',
};

export default Running;
