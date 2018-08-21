/**
 * Reusable form field
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import { Field } from 'formik';

const FormField = ({
  label, value, name, type, component, className, disabled, errors, touched,
}) => (
  <FormGroup>
    {/* Optional label */}
    {label ? <Label>{label}</Label> : ''}

    {/* Form field */}
    <Field
      className={className}
      name={name}
      value={value}
      type={type}
      component={component}
      disabled={disabled}
      autoComplete="off"
    />

    {/* Validation feedback */}
    {
      touched[name] && errors[name] &&
      <div>
        {errors[name]}
      </div>
    }
  </FormGroup>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
  component: 'input',
  className: 'form-control',
  label: null,
  value: '',
};

export default FormField;
