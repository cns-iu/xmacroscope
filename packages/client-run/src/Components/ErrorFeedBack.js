//
// Reusable form field error feedback
//
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { ErrorWrapper } from '../Primatives/BasePrimatives';

const ErrorFeedBack = ({
  name, disabled, errors, touched,
}) => (
  <Row>
    <Col sm={12}>
      <ErrorWrapper className="pt-2">
        {/* Validation feedback */}
        {
          errors[name]
          && (
            <span>{errors[name]}</span>
          )
        }
      </ErrorWrapper>
    </Col>
  </Row>
);

ErrorFeedBack.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  touched: PropTypes.object,
  disabled: PropTypes.bool,
};

ErrorFeedBack.defaultProps = {
  touched: {},
  disabled: false,
  errors: {},
};

export default ErrorFeedBack;
