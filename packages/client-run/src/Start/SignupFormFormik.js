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
  StyledCard,
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
        color
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

const SignupFormFormik = withFormik({

  validateOnBlur: false,
  validateOnChange: true,
  validationSchema: Yup.object().shape({
    ageGroup: Yup.string()
      .required('Required'),
    color: Yup.string()
      .required('Required'),
    shape: Yup.string()
      .required('Required'),
    height: Yup.number()
      .required('Required')
      .typeError('Height must be a number')
      .min(36)
      .max(96)
      .integer('Please enter a valid number'),
    // Zip codes are 5 digits
    // We don't accept the extra 4 digits.
    zipCode: Yup.string()
      .required('Required')
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
        run: {
          start: null,
          org: process.env.REACT_APP_LOCATION,
          person: {
            ageGroup: values.ageGroup,
            height: values.height,
            zipCode: values.zipCode,
            color: values.color,
            icon: values.shape,
            state: location.state,
            latitude: location.latitude,
            longitude: location.longitude,
            org: process.env.REACT_APP_LOCATION,
          },
        },
      },
    });
  },
})(SignupForm);

function WithCreateMutation(props) {
  const { settings } = props;
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
              color: data.FinishSignup.person.color,
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
            <StyledCard>
              <StyledCardHeader className="text-center">
                <BaseHeader>
                  {settings.activityName.toUpperCase()}
                  { ' ' }
                  SIGN UP
                </BaseHeader>
              </StyledCardHeader>
              <StyledCardBody>
                <SignupFormFormik
                  updateRun={updateRun}
                  settings={settings}
                />
              </StyledCardBody>
            </StyledCard>
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
