/**
 * Reusable form field
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const ErrorFeedBack = ({
  name, disabled, errors, touched,
}) => (
  <Row>
    <Col sm={12}>
      {/* Validation feedback */}
      {
      errors[name]
      && (
      <div>
        {errors[name]}
      </div>
      )
    }
    </Col>
  </Row>
);

ErrorFeedBack.propTypes = {
  name: PropTypes.string.isRequired,
  component: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};

ErrorFeedBack.defaultProps = {
  type: 'text',
  component: 'input',
  className: 'form-control',
  label: null,
  value: '',
};

export default ErrorFeedBack;
