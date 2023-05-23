/* eslint-disable arrow-body-style */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable no-var */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable prefer-destructuring */
/* eslint-disable operator-linebreak */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-curly-brace-presence */
import PropTypes from 'prop-types';
import React from 'react';
import { Form, Row, Col } from 'reactstrap';
import FormField from '../App/FormField';
import personOptions from '../Signup/personOptions';
import CustomInputHOC from '../Components/CustomInputHOC';
import ControlGroupButtons from '../Components/ControlGroupButtons';
import ControlSlider from '../Components/ControlSlider';
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
}) => {
  return (
    <Form onSubmit={handleSubmit} className="signup-form">
      <Row>
        <Col className="mt-3 text-center" lg={8}>
          <Row>
            <Col>
              <div className="icon-input">
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
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
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
            </Col>
            <Col className="mt-3">
              <ShoesInput
                className="form-control form-control-lg"
                name="shoes"
                label='What kind of "shoes" are you wearing?'
                errors={errors}
                touched={touched}
                type="hidden"
                options={personOptions.shoes}
                setInput={setFieldValue}
              />
            </Col>
          </Row>
        </Col>
        {settings.location !== 'null' &&
          (
            <Col className="mt-3 text-center" lg={4}>
              <div className="zip-code-input">
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
              </div>
            </Col>
          )
        }
      </Row>
      <Row>
        <Col className="text-center slider" lg={12}>
          <AgeInput
            className="form-control form-control-lg"
            min={0}
            max={100}
            name="age"
            label="How old are you?"
            errors={errors}
            touched={touched}
            type="hidden"
            options={personOptions.age}
            setInput={setFieldValue}
          />
        </Col>
      </Row>
      <Row>
        <Col className="mt-5 text-center slider" lg={12}>
          <HeightInput
            className="form-control form-control-lg"
            min={0}
            max={89}
            name="height"
            label="What's your height in inches?"
            errors={errors}
            touched={touched}
            type="hidden"
            setInput={setFieldValue}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={10} className="offset-1 px-0 pt-4">
          <StyledButton
            className="btn-lg btn-block link no-select"
            type="submit"
            disabled={!isValid}
            color="secondary"
          >
            {settings.activityName.toUpperCase()}
          </StyledButton>
        </Col>
      </Row>
    </Form>
  );
};

SignupForm.propTypes = {
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default SignupForm;
