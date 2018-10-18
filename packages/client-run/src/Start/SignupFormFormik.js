import React from "react";
import { withFormik } from "formik";
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import {BaseHeader} from "../Primatives/BasePrimatives";
import { Mutation } from "react-apollo";
import * as Yup from "yup";
import zipcodes from "zipcodes";
import SignupForm from "./SignupForm";
import gql from "graphql-tag";

Yup.setLocale({
  number: {
    default: 'Deve ser maior que',
  },
});

const UPDATE_RUN_LOCAL = gql`
  mutation updateRace($status: String!) {
    updateRace(
      status: $status
      age_group: $age_group
      favoriteActivity: $favoriteActivity
      height: $height
      siblings: $siblings
      zipcode: $zipcode
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
      .integer("Please enter a valid number"),
    zipcode: Yup.string()
      .matches(/(^\d{5}$)|(^\d{5}-\d{4}$)/, "Please enter 5 numbers for a Zip Code.")
      .test("test-name", "enter a valid US zip code", function (value) {
        const { path, createError } = this;
        if (typeof value !== 'undefined' && !zipcodes.lookup(value)) {
          return createError({ path, message: 'enter a valid US Zip Code' });
        } return true;
      })
  }),

  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */
    }
  ) => {
    const location = zipcodes.lookup(values.zipcode);
    props.updateRace({
      variables: {
        status: "opponentSelect",
        age_group: values.age_group,
        favoriteActivity: values.favoriteActivity,
        height: values.height,
        siblings: values.siblings,
        zipcode: values.zipcode,
        state: location.state,
        latitude: location.latitude,
        longitude: location.longitude
      }
    });
  }
})(SignupForm);

function WithCreateMutation(props) {
  return (
    <Mutation mutation={UPDATE_RUN_LOCAL}>
      {updateRace => (
        <Col xs={12} md={8} xl={8} className="mx-auto">
          <Card>
            <CardHeader className="text-center">
              <BaseHeader>RACE SIGN UP</BaseHeader>
            </CardHeader>
            <CardBody>
              <SignupFormFormik
                updateRace={updateRace}
              />
            </CardBody>
          </Card>
        </Col>
      )}
    </Mutation>
  );
}

export default WithCreateMutation;
