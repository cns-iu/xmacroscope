import React from 'react';
import PropTypes from 'prop-types';
import { ControlColor, ControlColorsContainer } from '../Primatives/ControlPrimatives';

const ControlColors = props => (
  <ControlColorsContainer className="pb-3">
    {
      props.options.map(opt => (
        <ControlColor
          width="50px"
          color={opt.hexValue}
          selected={opt.hexValue === props.value}
          key={opt.hexValue}
          onClick={() => { props.updateInputValue(opt.hexValue); }}
        />
      ))
    }
  </ControlColorsContainer>
);

ControlColors.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  updateInputValue: PropTypes.func.isRequired,
};

export default ControlColors;
