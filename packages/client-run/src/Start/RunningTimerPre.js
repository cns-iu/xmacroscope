import PropTypes from 'prop-types';
import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Col } from 'reactstrap';
import gql from 'graphql-tag';
import moment from 'moment';
import Timer from './Timer';

const GET_PRE_RUN_DELAY = gql`
  query GetPreRunDelay($location: String!) {
    Settings(location: $location){
      preRunDelay
    }
  }
`;

const START_RUN = gql`
  mutation startRun(
  $run: RunStartInput!
  ) {
    StartRun(
      run: $run
    )
  }
`;

function RunningTimerPre({ runId }) {
  return (
    <Query
      query={GET_PRE_RUN_DELAY}
      variables={{ location: process.env.REACT_APP_LOCATION }}
    >
      {({ loading, error, data: { Settings } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { preRunDelay } = Settings;

        return (
          <Mutation
            mutation={START_RUN}
            update={(cache) => {
              cache.writeData({
                data: {
                  activeRun: {
                    __typename: 'ActiveRun',
                    status: 'running',
                  },
                },
              });
            }}
          >
            {StartRun => (
              <Col className="col-sm-12">
                <div className="text-center pt-5">
                  <h1>On your marks...</h1>
                  <h2>
                    Step up to the starting line and
                    <br />
                    get ready to run.
                  </h2>
                  <Timer
                    completion={() => {
                      StartRun({
                        variables: {
                          run: {
                            id: runId,
                            start: moment(),
                          },
                        },
                      });
                    }}
                    displayTimer={false}
                    direction="down"
                    start={preRunDelay}
                    end={0}
                    countDownSound
                  />
                </div>
              </Col>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
}

RunningTimerPre.propTypes = {
  runId: PropTypes.string,
};

RunningTimerPre.defaultProps = {
  runId: null,
};

export default RunningTimerPre;
