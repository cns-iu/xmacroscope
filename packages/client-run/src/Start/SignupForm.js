import React from 'react';
import { Form, Button, Label } from 'reactstrap';
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
  <Form onSubmit={handleSubmit}>
    <Label>Age group</Label>
    <Field
      className="form-control"
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

    <Label>Favorite activity</Label>
    <Field
      className="form-control"
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

    <Label>Handedness</Label>
    <Field
      className="form-control"
      name="handedness"
      component="select"
      type="text"
      value={values.handedness}
      required
    >
      {personOptions.handedness.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </Field>

    <FormField
      name="zipcode"
      label="Zip code"
      errors={errors}
      touched={touched}
      value={values.zipcode}
    />

    <Button
      type="submit"
      disabled={isSubmitting}
      color="primary"
    >
      Submit
    </Button>
  </Form>
);

export default SignupForm;
