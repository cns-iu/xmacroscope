import React from 'react';
import PropTypes from 'prop-types';
import { ControlColor, ControlColorsContainer } from '../Primatives/ControlPrimatives';

const ControlColors = ({ options, value, updateInputValue }) => (
  <ControlColorsContainer className="pb-3">
    {
      options.map(opt => (
        <ControlColor
          width="50px"
          color={opt.hexValue}
          selected={opt.hexValue === value}
          key={opt.hexValue}
          onClick={() => {
            updateInputValue(opt.hexValue);
          }}
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
