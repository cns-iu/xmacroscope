import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { ControlKeypadContainer, KeyInput, PlaceHolder } from '../Primatives/ControlPrimatives';

const zipCodeUpdate = (zipCode) => {
  console.log(zipCode);
  let zipCodeFormatted = '';
  if (!zipCode.length) {
    zipCodeFormatted = '_ _ _ _ _ ';
  } else if (zipCode.length > 5) {
    zipCodeFormatted = zipCode;
  } else {
    zipCodeFormatted = zipCode + '_ '.repeat(5 - zipCode.length);
  }
  return zipCodeFormatted;
};
const ControlKeypad = props => (
  <Fragment>
    <Col sm={12}>
      <PlaceHolder className="pb-1 text-center">
        <h4>Zip Code:<span>&nbsp;&nbsp;{zipCodeUpdate(props.value)}</span></h4>
      </PlaceHolder>
    </Col>
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
  </Fragment>
);

ControlKeypad.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
};


export default ControlKeypad;
