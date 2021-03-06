import React from 'react';
import { Row, Col } from 'reactstrap';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import Timer from './Timer';
import RunFinishKeypress from './RunFinishKeypress';

const GET_RUN_ID = gql`
  query {
    activeRun @client {
      runId
    }
  }
`;

const FINISH_RUN = gql`
  mutation RunUpdate(
  $run: RunFinishInput!
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
    const { runTimeout } = this.props;
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
                      <Timer
                        stop={timerStopped}
                        direction="up"
                        start={0}
                        end={runTimeout}
                        displayTimer={false}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col className="text-center">
                      <RunFinishKeypress
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
};

export default RunnerTimer;
