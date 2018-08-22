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
                  <h1>Please wait...</h1>
                  <p>The runner is finishing up, you&apos;ll be able to sign up shortly.</p>
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
