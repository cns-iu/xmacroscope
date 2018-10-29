import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { StyledBTN } from '../Primatives/BasePrimatives';
import { ControlKeypadContainer, KeyInput } from '../Primatives/ControlPrimatives';

const ControlKeypad = props => (
  <ControlKeypadContainer>
    {
      props.options.map(opt => (
        <KeyInput
          hide={opt === '.'}
          dimension="50px"
          key={opt}
          onClick={() => { props.updateInputValue(opt); }}
        >
          {opt}
        </KeyInput>
      ))
    }
  </ControlKeypadContainer>
);

ControlKeypad.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};


export default ControlKeypad;
