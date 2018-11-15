import React, { Fragment } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { ControlKeypadContainer, KeyInput, PlaceHolder } from '../Primatives/ControlPrimatives';

const zipCodeUpdate = (zipCode) => {
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
const ControlKeypad = ({
  value, options, clearInput, updateInputValueConcat,
}) => (
  <Fragment>
    <Col sm={12}>
      <PlaceHolder className="pb-2 text-center">
        <h4>
          Zip Code:
          <span>
            &nbsp;
            &nbsp;
            {zipCodeUpdate(value)}
          </span>
        </h4>
      </PlaceHolder>
    </Col>
    <ControlKeypadContainer>
      {
        options.map(opt => (
          <KeyInput
            hide={opt === '.' ? 'hide' : 'show'}
            dimension="50px"
            key={opt}
            onClick={() => {
              if (opt === 'CLR') {
                clearInput();
              } else {
                updateInputValueConcat(opt);
              }
            }}
          >
            {opt}
          </KeyInput>
        ))
      }
    </ControlKeypadContainer>
  </Fragment>
);

ControlKeypad.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  clearInput: PropTypes.func.isRequired,
  updateInputValueConcat: PropTypes.func.isRequired,
};

export default ControlKeypad;
