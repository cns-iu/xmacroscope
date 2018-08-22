import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import Timer from './Timer';

const GET_PRE_RACE_DELAY = gql`
  query getPreRaceDelay($location: String!) {
    settings(location: $location){
      preRaceDelay
    }
  }
`;

const START_RUN = gql`
  mutation RunStart(
  $run: NewRunRecord!
  ) {
    runStart(
      run: $run
    )
  }
`;

function RunningTimerPre({
  persona, opponent, opponentName, opponentTime,
}) {
  return (
    <Query
      query={GET_PRE_RACE_DELAY}
      variables={{ location: process.env.REACT_APP_LOCATION }}
    >
      {({ loading, error, data: { settings } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        const { preRaceDelay } = settings;

        return (
          <Mutation
            mutation={START_RUN}
            update={(cache, { data }) => {
              const createdRunID = data.runStart;
              cache.writeData({
                data: {
                  activeRace: {
                    __typename: 'ActiveRace',
                    raceId: createdRunID,
                    status: 'running',
                  },
                },
              });
            }}
          >
            {runStart => (
              <div>
                <h1>On your marks...</h1>
                <p>Start up to the starting line and get ready to run.</p>
                <Timer
                  completion={() => {
                    runStart({
                      variables: {
                        run: {
                          start: moment(),
                          opponent,
                          opponentName,
                          opponentTime,
                          persona,
                        },
                      },
                    });
                  }}
                  direction="down"
                  start={preRaceDelay}
                  end={0}
                /> milliseconds
              </div>
            )}
          </Mutation>
        );
      }}
    </Query>
  );
}

export default RunningTimerPre;
