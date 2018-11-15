import React from 'react';
import { withFormik } from 'formik';
import { Row, Col } from 'reactstrap';
import { Mutation } from 'react-apollo';
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
        run: {
          start: null,
          person: {
            ageGroup: values.ageGroup,
            favoriteActivity: values.favoriteActivity,
            height: values.height,
            zipCode: values.zipCode,
            color: values.color,
            icon: values.shape,
            state: location.state,
            latitude: location.latitude,
            longitude: location.longitude,
          },
        },
      },
    });
  },
})(SignupForm);

function WithCreateMutation() {
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
            md={10}
            xl={7}
            className="mx-auto"
          >
            <StyledCard>
              <StyledCardHeader className="text-center">
                <BaseHeader>RUN SIGN UP</BaseHeader>
              </StyledCardHeader>
              <StyledCardBody>
                <SignupFormFormik
                  updateRun={updateRun}
                />
              </StyledCardBody>
            </StyledCard>
          </Col>
        </Row>
      )}
    </Mutation>
  );
}

export default WithCreateMutation;
