import React from 'react';
import { withFormik } from 'formik';
import { Mutation } from 'react-apollo';
import zipcodes from 'zipcodes';
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
      zipcode: $zipcode
      state: $state
      latitude: $latitude
      longitude: $longitude
    ) @client
  }
`;

const SignupFormFormik = withFormik({
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Your name is required';
    }
    // Zip codes are 5 digits
    // We don't accept the extra 4 digits.
    if (!/(^\d{5}$)/.test(values.zipcode)) {
      errors.zipcode = 'Please enter 5 numbers for a Zip Code.';
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
    const location = zipcodes.lookup(values.zipcode);
    props.updateRace({
      variables: {
        status: 'opponentSelect',
        name: values.name,
        gender: values.gender,
        age_group: values.age_group,
        handedness: values.handedness,
        siblings: values.siblings,
        zipcode: values.zipcode,
        state: location.state,
        latitude: location.latitude,
        longitude: location.longitude,
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
