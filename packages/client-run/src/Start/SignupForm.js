import React from "react";
import { Form, Button, Label, FormGroup, Row, Col } from "reactstrap";
import { Field } from "formik";
import FormField from "../App/FormField";
import personOptions from "../Signup/personOptions";
import ShapePicker from "../Components/ShapePicker";
import DisplayShape from "../Components/DisplayShape";
import { CirclePicker } from "react-color";

// Our inner form component which receives our form's state and updater methods
// as props
const SignupForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <Form onSubmit={handleSubmit} className="signup-form">
    <FormGroup>
      <Label>Age group</Label>
      <Field
        className="form-control form-control-lg"
        name="age_group"
        component="select"
        type="text"
        value={values.age_group}
        required
      >
        {personOptions.ageGroups.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
    </FormGroup>
    <FormGroup>
      <Label>Favorite activity</Label>
      <Field
        className="form-control form-control-lg"
        name="favoriteActivity"
        component="select"
        type="text"
        value={values.favoriteActivity}
        required
      >
        {personOptions.favoriteActivity.map(item => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </Field>
    </FormGroup>

    <FormField
      className="form-control form-control-lg"
      name="height"
      label="Height"
      errors={errors}
      touched={touched}
      value={values.height}
    />

    <FormField
      className="form-control form-control-lg"
      name="zipcode"
      label="Zip code"
      errors={errors}
      touched={touched}
      value={values.zipcode}
    />
    <Row>
      <Col className="pt-3">
        <FormGroup>
          <Label>
            <h3>Create a Shape</h3>
          </Label>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label>Select Color</Label>
          <Field
            className="form-control form-control-lg"
            name="color"
            component="select"
            type="text"
            value={values.colors}
            required
          >
            {personOptions.colors.map(item => (
              <option key={item.hexValue} value={item.hexValue}>
                {item.name}
              </option>
            ))}
          </Field>
        </FormGroup>
        <FormGroup>
          <Label>Select Shape</Label>
          <Field
            className="form-control form-control-lg"
            name="shape"
            component="select"
            type="text"
            value={values.shapes}
            required
          >
            {personOptions.shapes.map(item => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </Field>
        </FormGroup>
      </Col>
      <Col md={6}>
        <DisplayShape
          color={
            Object.prototype.hasOwnProperty.call(values, "color")
              ? values.color
              : "none"
          }
          shape={
            Object.prototype.hasOwnProperty.call(values, "shape")
              ? values.shape
              : "none"
          }
        />
      </Col>
    </Row>
    <Col sm={12} className="px-0 pt-5">
      <Button
        className="btn-lg btn-block"
        type="submit"
        disabled={isSubmitting}
        color="primary"
      >
        Submit
      </Button>
    </Col>
  </Form>
);

export default SignupForm;
