import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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

function RunningTimerPre() {
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
            variables={{
            run: { start: new Date().toLocaleString() },
          }}
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
                <h1>Pre race delay</h1>
                <p>The user has selected an opponent on the start line kiosk
                  and now a timer is running.
                </p>
                <p>Once this timer has completed the race will automatically
                  start.
                </p>
                <Timer
                  completion={runStart}
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
