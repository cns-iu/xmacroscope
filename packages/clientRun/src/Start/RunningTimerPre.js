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

const UPDATE_RUN = gql`
  mutation RunStart(
  $run: NewRunRecord!
  ) {
    runStart(
      run: $run
    )
  }
`;

const UPDATE_LOCAL_STATE = gql`
  mutation updateRace($status: String!, $opponent: String!) {
    updateRace(status: $status, opponent: $opponent) @client
  }
`;

class RunningTimerPre extends React.Component {
  constructor(props) {
    super(props);
    this.onTimerCompleted = this.onTimerCompleted.bind(this);
  }

  onTimerCompleted(runStart) {
    runStart({
      variables: {
        run: {
          start: new Date().toLocaleString(),
          opponent: 'placeholderOpponent',
        },
      },
    }).then((mutationResult) => {
      console.log(mutationResult.data.runStart);
      console.log('----^ ^ ^ ^ ^ mutationResult.data.runStart ^ ^ ^ ^ ^----');
    });
  }

  render() {
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
              mutation={UPDATE_RUN}
              update={(cache, { data: { runStart } }) => {
              const data = {
                activeRace: {
                  __typename: 'ActiveRace',
                  opponent: 'nothing',
                  raceId: runStart,
                  status: 'running',
                },
              };
              cache.writeData({ data });
            }}
            >
              {runStart => (
                <div>
                  <h1>Pre race delay</h1>
                  <p>The user has selected an opponent on the start line kiosk
                    and
                    now a timer is running.
                  </p>
                  <p>Once this timer has completed the race will automatically
                    start.
                  </p>
                  <Timer
                    completion={() => {
                      this.onTimerCompleted(runStart);
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
}

export default RunningTimerPre;
