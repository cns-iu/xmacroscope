import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import moment from 'moment';
import Timer from './Timer';
import RunFinishButton from './RunFInishButton';

const GET_RACE_ID = gql`
  query {
    activeRun @client {
      runId
    }
  }
`;

const FINISH_RUN = gql`
  mutation RunUpdate(
  $run: FinishRunRecord!
  ) {
    finishRun(
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
    const { lane, runTimeout } = this.props;
    const { timerStopped } = this.state;
    return (
      <Query query={GET_RACE_ID}>
        {({ loading, error, data: { activeRun } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { runId } = activeRun;

          return (
            <Mutation
              mutation={FINISH_RUN}
              refetchQueries={['runs']}
              update={(cache) => {
                cache.writeData({
                  data: {
                    activeRun: {
                      __typename: 'ActiveRun',
                      status: 'postRunTimer',
                    },
                  },
                });
              }}
            >
              {finishRun => (

                <Col>

                  <Row>
                    <Col>
                      <h3>Lane {lane} time</h3>
                      <Timer
                        stop={timerStopped}
                        direction="up"
                        start={0}
                        end={runTimeout}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <RunFinishButton
                        lane={lane}
                        runId={runId}
                        finishRun={finishRun}
                      />
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
  runTimeout: PropTypes.number.isRequired,
  lane: PropTypes.string.isRequired,
};

export default RunnerTimer;
