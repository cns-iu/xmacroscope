import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import moment from 'moment';
import Timer from './Timer';

const GET_RACE_ID = gql`
  query {
    activeRace @client {
      raceId
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

class RunnerTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStopped: false,
    };
  }

  render() {
    const { lane, raceTimeout } = this.props;
    const { timerStopped } = this.state;
    return (
      <Query query={GET_RACE_ID}>
        {({ loading, error, data: { activeRace } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { raceId } = activeRace;

          return (
            <Mutation
              mutation={FINISH_RUN}
              refetchQueries={['runs']}
              update={(cache) => {
                cache.writeData({
                  data: {
                    activeRace: {
                      __typename: 'ActiveRace',
                      status: 'postRunTimer',
                    },
                  },
                });
              }}
            >
              {runFinish => (

                <Col>

                  <Row>
                    <Col>
                      <h3>Lane {lane} race time</h3>
                      <Timer
                        stop={timerStopped}
                        direction="up"
                        start={0}
                        end={raceTimeout}
                      /> milliseconds
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Button
                        disabled={timerStopped}
                        color="primary"
                        onClick={() => {
                          this.setState({ timerStopped: true });
                          runFinish({
                            variables: {
                              run: {
                                id: raceId,
                                finish: moment(),
                              },
                            },
                          });
                        }}
                      >
                        Lane {lane} finish
                      </Button>
                    </Col>
                  </Row>

                </Col>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

RunnerTimer.propTypes = {
  raceTimeout: PropTypes.number.isRequired,
  lane: PropTypes.string.isRequired,
};

export default RunnerTimer;
