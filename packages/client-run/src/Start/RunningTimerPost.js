import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Timer from './Timer';
import generatePerson from '../Signup/generatePerson';

const GET_POST_RUN_DELAY = gql`
  query GetPostRunDelay($location: String!) {
    Settings(location: $location){
      postRunDelay
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
    const person = generatePerson();
    return (
      <Query
        query={GET_POST_RUN_DELAY}
        variables={{ location: process.env.REACT_APP_LOCATION }}
      >
        {({ loading, error, data: { Settings } }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { postRunDelay } = Settings;

          return (
            <Mutation
              mutation={UPDATE_RUN_LOCAL}
              variables={{
                status: 'signupForm',
                ...person,
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
