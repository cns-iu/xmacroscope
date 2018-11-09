import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { ControlKeypadContainer, KeyInput } from '../Primatives/ControlPrimatives';

const ControlKeypad = props => (
  <Fragment>
    <ControlKeypadContainer>
      {
      props.options.map((opt, index) => (
        <KeyInput
          hide={opt === '.' ? 'hide' : 'show'}
          dimension="50px"
          key={opt + index}
          onClick={() => { opt === 'CLR' ? props.clearInput() : props.updateInputValueConcat(opt); }}
        >
          {opt}
        </KeyInput>
      ))
    }
    </ControlKeypadContainer>
    <Col sm={12} className="pt-3">
      <h4>{props.value.length ? `Zip Code: ${props.value}` : ''}</h4>
    </Col>
  </Fragment>
);

ControlKeypad.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
};


export default ControlKeypad;
