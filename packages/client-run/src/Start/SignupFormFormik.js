import React from 'react';
import { withFormik } from 'formik';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import { Mutation } from 'react-apollo';
import * as Yup from 'yup';
import zipcodes from 'zipcodes';
import gql from 'graphql-tag';
import BaseHeader from '../Primatives/BasePrimatives';
import SignupForm from './SignupForm';

const UPDATE_RUN_LOCAL = gql`
  mutation updateRun($status: String!) {
    updateRun(
      status: $status
      ageGroup: $ageGroup
      favoriteActivity: $favoriteActivity
      height: $height
      siblings: $siblings
      zipCode: $zipCode
      color: $color
      icon: $icon
      state: $state
      latitude: $latitude
      longitude: $longitude
    ) @client
  }
`;

function zipCodeLookup(value) {
  const { path, createError } = this;
  if (typeof value !== 'undefined' && !zipcodes.lookup(value)) {
    return createError({ path, message: 'enter a valid US Zip Code' });
  }
  return true;
}

const SignupFormFormik = withFormik({
  validationSchema: Yup.object().shape({
    height: Yup.number()
      .typeError('height must be a number')
      .min(36)
      .max(96)
      .integer('Please enter a valid number'),
    zipCode: Yup.string()
    // Zip codes are 5 digits
    // We don't accept the extra 4 digits.
      .matches(
        /(^\d{5}$)|(^\d{5}-\d{4}$)/,
        'Please enter 5 numbers for a Zip Code.',
      )
      // Also do a Zip Code lookup to ensure that it's a valid place.
      .test('test-name', 'enter a valid US Zip Code', zipCodeLookup),
  }),

  // Submission handler
  handleSubmit: (values, { props }) => {
    const location = zipcodes.lookup(values.zipCode);
    props.updateRun({
      variables: {
        status: 'runTimerPre',
        ageGroup: values.ageGroup,
        favoriteActivity: values.favoriteActivity,
        height: values.height,
        siblings: values.siblings,
        zipCode: values.zipCode,
        color: values.color,
        icon: values.shape,
        state: location.state,
        latitude: location.latitude,
        longitude: location.longitude,
      },
    });
  },
})(SignupForm);

function WithCreateMutation() {
  return (
    <Mutation mutation={UPDATE_RUN_LOCAL}>
      {updateRun => (
        <Col
          xs={12}
          md={8}
          xl={8}
          className="mx-auto"
        >
          <Card>
            <CardHeader className="text-center">
              <BaseHeader>RUN SIGN UP</BaseHeader>
            </CardHeader>
            <CardBody>
              <SignupFormFormik
                updateRun={updateRun}
              />
            </CardBody>
          </Card>
        </Col>
      )}
    </Mutation>
  );
}

export default WithCreateMutation;
