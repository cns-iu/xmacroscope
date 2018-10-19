import React from 'react';
import { Query, Mutation } from 'react-apollo';
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
  mutation RunStart(
  $run: RunRecordInput!
  ) {
    startRun(
      run: $run
    )
  }
`;

function RunningTimerPre({
  person, opponent, opponentName, opponentTime,
}) {
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
            update={(cache, { data }) => {
              const createdRunID = data.startRun;
              cache.writeData({
                data: {
                  activeRun: {
                    __typename: 'ActiveRun',
                    runId: createdRunID,
                    status: 'running',
                  },
                },
              });
            }}
          >
            {startRun => (
              <div>
                <h1>On your marks...</h1>
                <p>Start up to the starting line and get ready to run.</p>
                <Timer
                  completion={() => {
                    startRun({
                      variables: {
                        run: {
                          start: moment(),
                          opponent,
                          opponentName,
                          opponentTime,
                          person,
                        },
                      },
                    });
                  }}
                  direction="down"
                  start={preRunDelay}
                  end={0}
                />
              </div>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
}

export default RunningTimerPre;
