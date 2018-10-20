import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Col } from 'reactstrap';
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
              {updateRace => (
                <Col
                  xs={6}
                  className="p-5 mx-auto"
                >
                  <div className="displayTimer">
                    <h1>Post race delay</h1>
                    <p className="pb-2">All runners and the opponent have finished the race.</p>
                    <p className="pb-2">
                      The system pauses in this post race state so that people can
                      see their times on the finish line screen, before the next
                      runners are allowed to start the race.
                    </p>
                    <p className="pb-2">
                      The start kiosk displays a <strong>Please Wait</strong>{' '}
                      message
                    </p>
                    <p className="pb-2">
                      After the timeout the system returns to the main startup
                      state
                    </p>
                    <h3>Post run timer</h3>
                    <Timer
                      completion={() => {
                        updateRace();
                      }}
                      direction="down"
                      start={postRunDelay}
                      end={0}
                      displayTimer
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
}

export default RunningTimerPost;
