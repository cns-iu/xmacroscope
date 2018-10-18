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
      preRunDelay
      postRunDelay
      startLineTimeout
      runTimeout
      attractDelay
    }
  }
`;

const UPDATE_RUN_LOCAL = gql`
  mutation updateRun(
  $status: String!
  $name: String!
  $color: String!
  $icon: String!
  $gender: String!
  $ageGroup: String!
  $favoriteActivity: String!
  $handedness: String!
  $height: String!
  $siblings: String!
  $zipCode: String!
  $latitude: String!
  $longitude: String!
  $state: String!
  ) {
    updateRun(
      status: $status,
      name: $name,
      color: $color,
      icon: $icon,
      gender: $gender,
      ageGroup: $ageGroup,
      favoriteActivity: $favoriteActivity,
      handedness: $handedness,
      height: $height,
      siblings: $siblings,
      zipCode: $zipCode,
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
          const { postRunDelay } = data.settings;
          return (
            <Mutation
              mutation={UPDATE_RUN_LOCAL}
              variables={{
                status: 'signupForm',
                ...persona,
              }}
            >
              {updateRun => (
                <div>
                  <h1>Please wait...</h1>
                  <p>The runner is finishing up, you&apos;ll be able to sign up shortly.</p>
                  <h3>Post run timer</h3>
                  <Timer
                    completion={() => {
                      updateRun();
                    }}
                    direction="down"
                    start={postRunDelay}
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
}

export default RunningTimerPost;
