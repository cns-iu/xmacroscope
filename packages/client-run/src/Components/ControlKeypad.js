import React from 'react';
import PropTypes from 'prop-types';
import { ControlKeypadContainer, KeyInput } from '../Primatives/ControlPrimatives';

const ControlKeypad = props => (
  <ControlKeypadContainer>
    {
      props.options.map((opt, index) => (
        <KeyInput
          hide={opt === '.' ? 'hide' : 'show'}
          dimension="50px"
          key={opt + index}
          onClick={() => { opt === 'DEL' ? props.clearInput() : props.updateInputValueConcat(opt); }}
        >
          {opt}
        </KeyInput>
      ))
    }
  </ControlKeypadContainer>
);

ControlKeypad.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
};


export default ControlKeypad;
