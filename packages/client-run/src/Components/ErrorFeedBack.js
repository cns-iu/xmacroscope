//
// Reusable form field error feedback
//
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { ErrorWrapper } from '../Primatives/BasePrimatives';

const ErrorFeedBack = ({ name, errors }) => {
  const active = errors[name] ? errors[name] : null;
  return (
    <Row className="justify-content-center">
      <Col>
        {/* Validation feedback */}
        {
          <ErrorWrapper className="p-1" active={active}>
            {errors[name] ? errors[name] : '\u00A0'}
          </ErrorWrapper>
        }
      </Col>
    </Row>
  );
};

ErrorFeedBack.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
};

ErrorFeedBack.defaultProps = {
  errors: {},
};

export default ErrorFeedBack;
