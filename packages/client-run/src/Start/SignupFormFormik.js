import React from 'react';
import { withFormik } from 'formik';
import { Mutation } from 'react-apollo';
import SignupForm from './SignupForm';
import gql from 'graphql-tag';

const UPDATE_RUN_LOCAL = gql`
  mutation updateRace($status: String!) {
    updateRace(
      status: $status
      name: $name
      gender: $gender
      age_group: $age_group
      handedness: $handedness
      siblings: $siblings
    ) @client
  }
`;

// Wrap our form with the using withFormik HoC
const SignupFormFormik = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ name: '' }),

  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Your name is required';
    }
    return errors;
  },

  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    },
  ) => {
    props.updateRace({
      variables: {
        status: 'opponentSelect',
        name: values.name,
        gender: values.gender,
        age_group: values.age_group,
        handedness: values.handedness,
        siblings: values.siblings,
      },
    });
  },
})(SignupForm);

function WithCreateMutation(props) {
  return (
    <Mutation mutation={UPDATE_RUN_LOCAL}>
      {updateRace => (
        <SignupFormFormik updateRace={updateRace} />
      )}
    </Mutation>
  );
}

export default WithCreateMutation;
