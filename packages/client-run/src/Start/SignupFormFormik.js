import React from "react";
import { withFormik } from "formik";
import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { Mutation } from "react-apollo";
import zipcodes from "zipcodes";
import SignupForm from "./SignupForm";
import gql from "graphql-tag";

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
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    const errors = {};
    // Zip codes are 5 digits
    // We don't accept the extra 4 digits.
    if (!/(^\d{5}$)/.test(values.zipcode)) {
      errors.zipcode = "Please enter 5 numbers for a Zip Code.";
    }
    // Also do a Zip Code lookup to ensure that it's a valid place.
    if (!zipcodes.lookup(values.zipcode)) {
      errors.zipcode =
        "Sorry that doesn't look like a valid Zip Code for a" +
        " place in the US";
    }
    return errors;
  },

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
            <CardHeader className="text-center signup-header">
              <h1>RACE SIGN UP</h1>
            </CardHeader>
            <CardBody>
              <SignupFormFormik updateRace={updateRace} />
            </CardBody>
          </Card>
        </Col>
      )}
    </Mutation>
  );
}

export default WithCreateMutation;
