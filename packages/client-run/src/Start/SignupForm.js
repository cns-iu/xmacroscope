import React from 'react';
import { Form, Button, Label, FormGroup } from 'reactstrap';
import { Field } from 'formik';
import FormField from '../App/FormField';
import personOptions from '../Signup/personOptions';

// Our inner form component which receives our form's state and updater methods
// as props
const SignupForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
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
          <option key={item} value={item}>{item}</option>
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
          <option key={item} value={item}>{item}</option>
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
    <div className="col-12 px-0 pt-5">
      <Button
        className="btn-lg btn-block"
        type="submit"
        disabled={isSubmitting}
        color="primary"
      >
      Submit
      </Button>
    </div>
  </Form>
);

export default SignupForm;
