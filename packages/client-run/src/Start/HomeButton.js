import React from 'react';
import { Mutation } from 'react-apollo';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Button } from 'reactstrap';
import gql from 'graphql-tag';

const UPDATE_RUN_LOCAL = gql`
  mutation updateRun($status: String!) {
    updateRun(
      status: $status
    ) @client
  }
`;

const HomeButton = () => (
  <Mutation
    mutation={UPDATE_RUN_LOCAL}
    variables={{
      status: 'signupForm',
    }}
  >
    {updateRun => (
      <Button onClick={updateRun}>
        <FaArrowCircleLeft
          style={{ marginBottom: '-2px' }}
        /> Start over
      </Button>
    )}
  </Mutation>
);

export default HomeButton;

