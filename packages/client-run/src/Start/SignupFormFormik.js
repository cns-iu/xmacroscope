import React from 'react';
import { withFormik } from 'formik';
import { Row, Col } from 'reactstrap';
import { Mutation } from 'react-apollo';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import zipcodes from 'zipcodes';
import gql from 'graphql-tag';
import {
  BaseHeader,
  StyledCardHeader,
  StyledCardBody,
} from '../Primatives/BasePrimatives';
import SignupForm from './SignupForm';

const FINISH_SIGNUP = gql`
  mutation finishSignup(
    $run: RunInput,
  ) {
    FinishSignup(
      run: $run
    ) {
      id
      person {
        icon
      }
    }
  }
`;

function zipCodeLookup(value) {
  const { path, createError } = this;
  if (typeof value !== 'undefined' && !zipcodes.lookup(value)) {
    return createError({ path, message: 'enter a valid US Zip Code' });
  }
  return true;
}

function getSignupForm(settings) {
  return withFormik({
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: Yup.object().shape({
      opponent: Yup.string()
        .required('Required'),
      shoes: Yup.string()
        .required('Required'),
      age: Yup.number()
        .required('Required'),
      height: Yup.number()
        .required('Required')
        .typeError('Height must be a number')
        .min(0)
        .max(100)
        .integer('Please enter a valid number'),
      // Zip codes are 5 digits
      // We don't accept the extra 4 digits.
      zipCode: settings.location === 'null' ? undefined : Yup.string()
        .required('Required') // Get location and then decide required or not
        .matches(
          /(^\d{5}$)|(^\d{5}-\d{4}$)/,
          'Please enter 5 numbers for a Zip Code.',
        )
        // Also do a Zip Code lookup to ensure that it's a valid place.
        .test('test-name', 'enter a valid US Zip Code', zipCodeLookup),
      icon: Yup.string()
        .required('Required'),
    }),

    // Submission handler
    handleSubmit: (values, { props }) => {
      let location;
      if (values.zipCode !== undefined) {
        location = zipcodes.lookup(values.zipCode);
      }
      props.updateRun({
        variables: {
          run: {
            start: null,
            org: settings.location,
            person: {
              opponent: values.opponent,
              shoes: values.shoes,
              age: values.age,
              height: values.height,
              zipCode: values.zipCode,
              icon: values.icon,
              state: !values.zipcode ? '' : location.state,
              latitude: !values.zipCode ? 0.0 : location.latitude,
              longitude: !values.zipCode ? 0.0 : location.longitude,
              org: settings.location,
            },
          },
        },
      });
    },
  })(SignupForm);
}

function WithCreateMutation(props) {
  const { settings } = props;
  const SignupFormFormik = getSignupForm(settings);
  return (
    <Mutation
      mutation={FINISH_SIGNUP}
      update={(cache, { data }) => {
        cache.writeData({
          data: {
            activeRun: {
              __typename: 'ActiveRun',
              runId: data.FinishSignup.id,
              status: 'runTimerPre',
              icon: data.FinishSignup.person.icon,
            },
          },
        });
      }}
    >
      {updateRun => (
        <Row className="h-100 align-items-center">
          <Col
            md={12}
            xl={12}
            className="mx-auto"
          >
            <StyledCardHeader className="text-center">
              <BaseHeader>
                {settings.activityName.toUpperCase()}
                {' '}
                SIGN UP
              </BaseHeader>
            </StyledCardHeader>
            <StyledCardBody>
              <SignupFormFormik
                updateRun={updateRun}
                settings={settings}
              />
            </StyledCardBody>
          </Col>
        </Row>
      )}
    </Mutation>
  );
}

WithCreateMutation.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default WithCreateMutation;
