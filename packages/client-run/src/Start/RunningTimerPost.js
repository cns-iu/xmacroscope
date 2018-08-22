import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';
import generatePersona from '../Signup/generatePersona';

const GET_SETTINGS = gql`
  query settings($location: String!) {
    settings(location: $location){
      location
      latitude
      longitude
      preRaceDelay
      postRaceDelay
      startLineTimeout
      raceTimeout
      attractDelay
    }
  }
`;

const UPDATE_RUN_LOCAL = gql`
  mutation updateRace(
  $status: String!
  $name: String!
  $color: String!
  $icon: String!
  $gender: String!
  $age_group: String!
  $favoriteActivity: String!
  $handedness: String!
  $height: String!
  $siblings: String!
  $zipcode: String!
  $latitude: String!
  $longitude: String!
  $state: String!
  ) {
    updateRace(
      status: $status,
      name: $name,
      color: $color,
      icon: $icon,
      gender: $gender,
      age_group: $age_group,
      favoriteActivity: $favoriteActivity,
      handedness: $handedness,
      height: $height,
      siblings: $siblings,
      zipcode: $zipcode,
      latitude: $latitude,
      longitude: $longitude,
      state: $state,
    ) @client
  }
`;

class RunningTimerPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const persona = generatePersona();
    return (
      <Query
        query={GET_SETTINGS}
        variables={{ location: process.env.REACT_APP_LOCATION }}
      >
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { postRaceDelay } = data.settings;
          return (
            <Mutation
              mutation={UPDATE_RUN_LOCAL}
              variables={{
                status: 'signupForm',
                ...persona,
              }}
            >
              {updateRace => (
                <div>
                  <h1>Post race delay</h1>
                  <p>All runners and the opponent have finished the race.</p>
                  <p>The system pauses in this post race state so that people
                    can see their times on the finish line screen, before the
                    next runners are allowed to start the race.
                  </p>
                  <p>The start kiosk displays a <strong>Please Wait</strong> message</p>
                  <p>After the timeout the system returns to the main startup
                    state
                  </p>
                  <h3>Post run timer</h3>
                  <Timer
                    completion={() => {
                      updateRace();
                    }}
                    direction="down"
                    start={postRaceDelay}
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

export default RunningTimerPost;
