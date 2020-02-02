import PropTypes from 'prop-types';
import React from 'react';
import { Form, Row, Col } from 'reactstrap';
import FormField from '../App/FormField';
import personOptions from '../Signup/personOptions';
import CustomInputHOC from '../Components/CustomInputHOC';
import ControlGroupButtons from '../Components/ControlGroupButtons';
import ControlSlider from '../Components/ControlSlider';
// import ControlShapes from '../Components/ControlShapes';
// import ControlColors from '../Components/ControlColors';
import ControlKeypad from '../Components/ControlKeypad';
import ErrorFeedBack from '../Components/ErrorFeedBack';
import { StyledButton } from '../Primatives/BasePrimatives';

// Our inner form component which receives our form's state and updater methods as props
const AgeInput = CustomInputHOC(FormField, ControlSlider, ErrorFeedBack);
const ShoesInput = CustomInputHOC(FormField, ControlGroupButtons, ErrorFeedBack);
const IconInput = CustomInputHOC(FormField, ControlGroupButtons, ErrorFeedBack);
const OpponentInput = CustomInputHOC(FormField, ControlGroupButtons, ErrorFeedBack);
const ZipCodeInput = CustomInputHOC(FormField, ControlKeypad, ErrorFeedBack);
const HeightInput = CustomInputHOC(FormField, ControlSlider, ErrorFeedBack);

const SignupForm = ({
  errors,
  touched,
  handleSubmit,
  isValid,
  setFieldValue,
  settings,
}) => (
  <Form onSubmit={handleSubmit} className="signup-form">
    <Row>
      <Col className="text-center" lg={6}>
        <OpponentInput
          className="form-control form-control-lg"
          name="opponent"
          label="Who would you like to race?"
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.opponents}
          setInput={setFieldValue}
        />
        <ShoesInput
          className="form-control form-control-lg"
          name="shoes"
          label='What kind of "shoes" are you wearing'
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.shoes}
          setInput={setFieldValue}
        />
        <AgeInput
          className="form-control form-control-lg"
          min={0}
          max={110}
          name="age"
          label="How old are you?"
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.age}
          setInput={setFieldValue}
        />
        <HeightInput
          className="form-control form-control-lg"
          min={36}
          max={96}
          height
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
        <IconInput
          className="form-control form-control-lg"
          name="icon"
          label="Select your icon"
          errors={errors}
          touched={touched}
          type="hidden"
          options={personOptions.iconNames}
          icon
          iconImages={personOptions.iconImages}
          iconImageSize={60}
          setInput={setFieldValue}
        />
      </Col>
    </Row>
    <Col sm={12} className="px-0 pt-4">
      <StyledButton
        className="btn-lg btn-block link no-select"
        type="submit"
        disabled={!isValid}
        color="secondary"
      >
        {settings.activityName.toUpperCase()}
      </StyledButton>
    </Col>
  </Form>
);

SignupForm.propTypes = {
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default SignupForm;
