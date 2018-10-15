import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
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
    <Label>What&apos;s your age group?</Label>
    <Field
      className="form-control"
      name="age_group"
      component="select"
      type="text"
      value={values.age_group}
      required
    >
      <option value="">&nbsp;</option>
      {personOptions.ageGroups.map(item => (
        <option
          key={item}
          value={item}
        >{item}
        </option>
      ))}
    </Field>

    <Label>What&apos;s your favorite activity</Label>
    <Field
      className="form-control"
      name="favoriteActivity"
      component="select"
      type="text"
      value={values.favoriteActivity}
      required
    >
      <option value="">&nbsp;</option>
      {personOptions.favoriteActivity.map(item => (
        <option
          key={item}
          value={item}
        >{item}
        </option>
      ))}
    </Field>

    <FormField
      name="height"
      label="Height"
      errors={errors}
      touched={touched}
      value={values.height}
    />
    <Label>Are you left or right handed?</Label>
    <Field
      className="form-control"
      name="handedness"
      component="select"
      type="text"
      value={values.handedness}
      required
    >
      <option value="">&nbsp;</option>
      {personOptions.handedness.map(item => (
        <option
          key={item}
          value={item}
        >{item}
        </option>
      ))}
    </Field>

    <FormField
      name="zipcode"
      label="What's the zip code where you live?"
      errors={errors}
      touched={touched}
      value={values.zipcode}
    />

    <Button
      type="submit"
      disabled={isSubmitting}
      color="primary"
    >
      Next <FaArrowCircleRight
        style={{ marginBottom: '-2px' }}
      />
    </Button>
  </Form>
);

export default SignupForm;
