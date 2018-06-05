import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import OpponentSelect from './OpponentSelect';
import RunningTimerPre from './RunningTimerPre';

// Local state
// Store selected opponent
const GET_RACE = gql`
  query {
    currentRace @client {
      opponent
      status
    }
  }
`;

function StartPage() {
  return (
    <Query query={GET_RACE}>
      {({ loading, error, data: { currentRace } }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;
        return (
          <div>
            {{
              startup: <OpponentSelect />,
              preRunningTimer: <RunningTimerPre/>,
              falseStart: <div>False start</div>,
            }[currentRace.status]}
          </div>
        );
      }}
    </Query>
  );
}

export default StartPage;
