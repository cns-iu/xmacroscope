import React from 'react';
import { Form, Label, FormGroup, Row, Col } from 'reactstrap';
import { Field } from 'formik';
import FormField from '../App/FormField';
import personOptions from '../Signup/personOptions';
import DisplayShape from '../Components/DisplayShape';
import CustomInputHOC from '../Components/CustomInputHOC';
import ButtonsInput from '../Components/ButtonsInput';
import { StyledButton } from '../Primatives/BasePrimatives';


const AgeInput = CustomInputHOC(FormField, ButtonsInput);

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
  <Form
    onSubmit={handleSubmit}
    className="signup-form"
  >
    <Row>
      <Col lg={6}>
        <AgeInput
          className="form-control form-control-lg"
          name="ageGroup"
          label="What age group are you in?"
          errors={errors}
          touched={touched}
          value={values.ageGroup}
        />
      </Col>
      <Col lg={6}>
        <FormGroup>
          <Label>What&apos;s your favorite activity?</Label>
          <Field
            className="form-control form-control-lg"
            name="favoriteActivity"
            component="select"
            type="text"
            value={values.favoriteActivity}
            required
          >
            <option
              className={Object.prototype.hasOwnProperty.call(
            values,
            'favoriteActivity',
          ) ? 'd-none' : ''}
              value="none"
            > -- select an option --
            </option>
            {personOptions.favoriteActivity.map(item => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
        ))}
          </Field>
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <FormField
          className="form-control form-control-lg"
          name="height"
          label="How many inches tall are you?"
          errors={errors}
          touched={touched}
          value={values.height}
        />
      </Col>
      <Col lg={6}>
        <FormField
          className="form-control form-control-lg"
          name="zipCode"
          label="What's your Zip Code"
          errors={errors}
          touched={touched}
          value={values.zipCode}
        />
      </Col>
    </Row>
    <Row>
      <Col className="pt-3 pb-2">
        <h1 className="text-center">Create your icon</h1>
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
            required
          >
            <option
              className={
                Object.prototype.hasOwnProperty.call(
                  values,
                  'color',
                ) ? 'd-none' : ''
              }
              value="none"
            >-- select an option --
            </option>
            {personOptions.colors.map(item => (
              <option
                key={item.hexValue}
                value={item.hexValue}
              >
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
            <option
              className={Object.prototype.hasOwnProperty.call(
                values,
                'shape',
              ) ? 'd-none' : ''}
              value="none"
            > -- select an option --
            </option>
            {personOptions.shapes.map(item => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </Field>
        </FormGroup>
      </Col>
      <Col md={6} className="align-self-center">
        <DisplayShape
          color={
            Object.prototype.hasOwnProperty.call(values, 'color')
              ? values.color
              : 'none'
          }
          shape={
            Object.prototype.hasOwnProperty.call(values, 'shape')
              ? values.shape
              : 'none'
          }
          shapeTransform="translate(50, 50) scale(.75)"
          width="50%"
          margin="auto"
        />
      </Col>
    </Row>
    <Col
      sm={12}
      className="px-0 pt-5"
    >
      <StyledButton
        className="btn-lg btn-block"
        type="submit"
        disabled={isSubmitting}
        color="primary"
      >
        RUN
      </StyledButton>
    </Col>
  </Form>
);

export default SignupForm;
