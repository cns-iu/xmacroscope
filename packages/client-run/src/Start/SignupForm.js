import React from 'react';
import {
  Form, Label, FormGroup, Row, Col,
} from 'reactstrap';
import { Field } from 'formik';
import FormField from '../App/FormField';
import personOptions from '../Signup/personOptions';
import DisplayShape from '../Components/DisplayShape';
import CustomInputHOC from '../Components/CustomInputHOC';
import ControlGroupBtns from '../Components/ControlGroupBtns';
import ControlSlider from '../Components/ControlSlider';
import ControlShape from '../Components/ControlShape';
import ErrorFeedBack from '../Components/ErrorFeedBack';
import { StyledButton } from '../Primatives/BasePrimatives';


// Our inner form component which receives our form's state and updater methods
// as props

const AgeInput = CustomInputHOC(FormField, ControlGroupBtns, ErrorFeedBack);
const ActivityInput = CustomInputHOC(FormField, ControlGroupBtns, ErrorFeedBack);
const HeightInput = CustomInputHOC(FormField, ControlSlider, ErrorFeedBack);
const ShapeInput = CustomInputHOC(FormField, ControlShape, ErrorFeedBack);

const SignupForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
}) => (
  <Form onSubmit={handleSubmit} className="signup-form">
    <Row>
      <Col lg={6}>
        <AgeInput
          className="form-control form-control-lg"
          name="ageGroup"
          label="What age group are you in?"
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.ageGroups}
          setInput={setFieldValue}
        />
      </Col>
      <Col lg={6}>
        <ActivityInput
          className="form-control form-control-lg"
          name="favoriteActivity"
          label="What's your favorite activity?"
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.favoriteActivity}
          setInput={setFieldValue}
          visible
        />
      </Col>
    </Row>
    <Row>
      <Col lg={6}>
        <HeightInput
          className="form-control form-control-lg"
          name="height"
          label="What's your height?"
          errors={errors}
          touched={touched}
          type="hidden"
          setInput={setFieldValue}
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
                Object.prototype.hasOwnProperty.call(values, 'color')
                  ? 'd-none'
                  : ''
              }
              value="none"
            >
              -- select an option --
            </option>
            {personOptions.colors.map(item => (
              <option key={item.hexValue} value={item.hexValue}>
                {item.name}
              </option>
            ))}
          </Field>
        </FormGroup>
        <ShapeInput
          className="form-control form-control-lg"
          name="shape"
          label="Select Shape"
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.shapes}
          setInput={setFieldValue}
        />
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
          type="viewDisplay"
        />
      </Col>
    </Row>
    <Col sm={12} className="px-0 pt-5">
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
