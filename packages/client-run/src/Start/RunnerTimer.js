import React from 'react';
import { Row, Col } from 'reactstrap';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Timer from './Timer';
import RunFinishButton from './RunFinishButton';

const GET_RUN_ID = gql`
  query {
    activeRun @client {
      runId
    }
  }
`;

const FINISH_RUN = gql`
  mutation RunUpdate(
  $run: RunRecordFinishInput!
  ) {
    FinishRun(
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
      <Query query={GET_RUN_ID}>
        {({ loading, error, data: { activeRun } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { runId } = activeRun;

          return (
            <Mutation
              mutation={FINISH_RUN}
              refetchQueries={['Runs']}
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
              {FinishRun => (

                <Col>

                  <Row>
                    <Col>
                      <h3>Lane {lane} time</h3>
                      <Timer
                        stop={timerStopped}
                        direction="up"
                        start={0}
                        end={runTimeout}
                        displayTimer
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col className="text-center">
                      <RunFinishButton
                        lane={lane}
                        runId={runId}
                        finishRun={FinishRun}
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
