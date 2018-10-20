import React from 'react';
import { withFormik } from 'formik';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
import { BaseHeader } from '../Primatives/BasePrimatives';
import { Mutation } from 'react-apollo';
import * as Yup from 'yup';
import zipcodes from 'zipcodes';
import SignupForm from './SignupForm';
import gql from 'graphql-tag';

Yup.setLocale({
  number: {
    default: 'Deve ser maior que',
  },
});

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
      .test('test-name', 'enter a valid US Zip Code', function (value) {
        const { path, createError } = this;
        if (typeof value !== 'undefined' && !zipcodes.lookup(value)) {
          return createError({ path, message: 'enter a valid US Zip Code' });
        }
        return true;
      }),
  }),

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
