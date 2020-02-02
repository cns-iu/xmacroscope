import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { Col } from 'reactstrap';
import gql from 'graphql-tag';
import Timer from './Timer';

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
  ) {
    updateRun(
      runId: null,
      status: $status,
      name: null,
      color: null,
      icon: null,
      age: null,
      opponent: null,
      shoes: null,
      height: null,
      zipCode: null,
      latitude: null,
      longitude: null,
      state: null,
    ) @client
  }
`;

function RunningTimerPost() {
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
              status: 'preSignupForm',
            }}
          >
            {updateRace => (
              <Col
                xs={12}
                className="pt-3 mx-auto d-flex h-100 align-items-center"
              >
                <div className="displayTimer w-100 text-center">
                  <h1>Wait for the current runner to finish.</h1>
                  <Timer
                    completion={() => {
                      updateRace();
                    }}
                    direction="down"
                    start={postRunDelay}
                    end={0}
                    displayTimer={false}
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

export default RunningTimerPost;
