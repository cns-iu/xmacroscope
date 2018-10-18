import React from 'react';
import { withFormik } from 'formik';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { Mutation } from 'react-apollo';
import zipcodes from 'zipcodes';
import SignupForm from './SignupForm';
import gql from 'graphql-tag';

const UPDATE_RUN_LOCAL = gql`
  mutation updateRun($status: String!) {
    updateRun(
      status: $status
      ageGroup: $ageGroup
      favoriteActivity: $favoriteActivity
      height: $height
      siblings: $siblings
      zipCode: $zipCode
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
    // Zip codes are 5 digits
    // We don't accept the extra 4 digits.
    if (!/(^\d{5}$)/.test(values.zipCode)) {
      errors.zipCode = 'Please enter 5 numbers for a Zip Code.';
    }
    // Also do a Zip Code lookup to ensure that it's a valid place.
    if (!zipcodes.lookup(values.zipCode)) {
      errors.zipCode = 'Sorry that doesn\'t look like a valid Zip Code for a' +
        ' place in the US';
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
    const location = zipcodes.lookup(values.zipCode);
    props.updateRun({
      variables: {
        status: 'opponentSelect',
        ageGroup: values.ageGroup,
        favoriteActivity: values.favoriteActivity,
        height: values.height,
        siblings: values.siblings,
        zipCode: values.zipCode,
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
      {updateRun => (
        <Col xs={12} md={6} xl={5} className="mx-auto">
          <Card>
            <CardHeader className="text-center signup-header"><h1>RACE SIGN UP</h1></CardHeader>
            <CardBody>
              <SignupFormFormik updateRun={updateRun} />
            </CardBody>
          </Card>
        </Col>
      )}
    </Mutation>
  );
}

export default WithCreateMutation;
