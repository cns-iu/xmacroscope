import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Timer from './Timer';

const GET_RACE = gql`
  query {
    activeRace @client {
      raceId
    }
  }
`;

const UPDATE_RUN = gql`
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
      count: 0,
      timerStopped: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      count: this.state.count + 1,
    });

    console.log('Button click');
  }

  render() {
    const { lane, raceTimeout } = this.props;
    const { timerStopped } = this.state;
    return (
      <Query query={GET_RACE}>
        {({ loading, error, data: { activeRace } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <Mutation
              mutation={UPDATE_RUN}
              variables={{
              run: {
                id: activeRace.raceId,
                finish: new Date().toLocaleString(),
              },
            }}
            >
              {runFinish => (

                <Col>
                  <Row>
                    <Col>
                      <h3>Lane {lane} race time</h3>
                      <Timer
                        completion={() => {
                          console.log('Done in the lane');
                        }}
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
                        console.log('lane1');
                        this.setState({
                          timerStopped: true,
                        });
                        runFinish();
                      }
                      }
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
  lane: PropTypes.string.isRequired,
};

export default RunnerTimer;
