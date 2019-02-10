import PropTypes from 'prop-types';
import React from 'react';
import { Form, Row, Col } from 'reactstrap';
import FormField from '../App/FormField';
import personOptions from '../Signup/personOptions';
import DisplayShape from '../Components/DisplayShape';
import CustomInputHOC from '../Components/CustomInputHOC';
import ControlGroupButtons from '../Components/ControlGroupButtons';
import ControlSlider from '../Components/ControlSlider';
import ControlShapes from '../Components/ControlShapes';
import ControlColors from '../Components/ControlColors';
import ControlKeypad from '../Components/ControlKeypad';
import ErrorFeedBack from '../Components/ErrorFeedBack';
import { StyledButton, BaseFormHeader } from '../Primatives/BasePrimatives';

// Our inner form component which receives our form's state and updater methods as props
const AgeInput = CustomInputHOC(FormField, ControlGroupButtons, ErrorFeedBack);
const ActivityInput = CustomInputHOC(FormField, ControlGroupButtons, ErrorFeedBack);
const ZipCodeInput = CustomInputHOC(FormField, ControlKeypad, ErrorFeedBack);
const HeightInput = CustomInputHOC(FormField, ControlSlider, ErrorFeedBack);
const ShapeInput = CustomInputHOC(FormField, ControlShapes, ErrorFeedBack);
const ColorInput = CustomInputHOC(FormField, ControlColors, ErrorFeedBack);

const SignupForm = ({
  values,
  errors,
  touched,
  handleSubmit,
  isValid,
  setFieldValue,
}) => (
  <Form onSubmit={handleSubmit} className="signup-form">
    <Row>
      <Col className="text-center" lg={6}>
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
      <Col className="text-center" lg={6}>
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
    <Row className="pt-4">
      <Col className="text-center" lg={6}>
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
      <Col className="text-center" lg={6}>
        <ZipCodeInput
          className="form-control form-control-lg"
          name="zipCode"
          label="What's your Zip Code?"
          errors={errors}
          touched={touched}
          options={['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'CLR']}
          type="hidden"
          setInput={setFieldValue}
        />
      </Col>
    </Row>
    <Row>
      <Col className="pt-3 pb-2">
        <BaseFormHeader className="text-center">Create your icon</BaseFormHeader>
      </Col>
    </Row>
    <Row>
      <Col className="text-center" md={6}>
        <ColorInput
          className="form-control form-control-lg"
          name="color"
          label="Select color"
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.colors}
          setInput={setFieldValue}
        />
        <ShapeInput
          className="form-control form-control-lg"
          name="shape"
          label="Select shape"
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
          typeDisplay="viewDisplay"
        />
      </Col>
    </Row>
    <Col sm={12} className="px-0 pt-4">
      <StyledButton
        className="btn-lg btn-block link"
        type="submit"
        disabled={!isValid}
        color="secondary"
      >
        RUN
      </StyledButton>
    </Col>
  </Form>
);

SignupForm.propTypes = {
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
};

export default SignupForm;
