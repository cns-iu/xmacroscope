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
    <FormField
      name="name"
      label="Name"
      errors={errors}
      touched={touched}
      value={values.name}
    />

    <Label>Gender</Label>
    <Field
      className="form-control"
      name="gender"
      component="select"
      type="text"
      value={values.gender}
      required
    >
      <option value="" />
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="other">Other</option>
    </Field>

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
        <option value={item}>{item}</option>
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
        <option value={item}>{item}</option>
      ))}
    </Field>

    <Label>Siblings</Label>
    <Field
      className="form-control"
      name="siblings"
      component="select"
      type="text"
      value={values.siblings}
      required
    >
      {_.range(personOptions.siblings.min, (personOptions.siblings.max + 1))
        .map(item => (
          <option value={item}>{item}</option>
        ))}
    </Field>

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
