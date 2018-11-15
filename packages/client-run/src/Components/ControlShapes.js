import React from 'react';
import PropTypes from 'prop-types';
import DisplayShape from './DisplayShape';
import { ControlShapesContainer } from '../Primatives/ControlPrimatives';

const ControlShapes = ({ value, updateInputValue, options }) => (
  <ControlShapesContainer>
    {
      options.map(opt => (
        <DisplayShape
          typeDisplay="controlDisplay"
          selected={opt === value}
          key={opt}
          value={opt}
          updateInputValue={updateInputValue}
          color="#fdff5f"
          shape={opt}
          shapeTransform="translate(50, 50) scale(.75)"
          width="60px"
          margin="auto"
        />
      ))
    }
  </ControlShapesContainer>
);

ControlShapes.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  updateInputValue: PropTypes.func.isRequired,
};

export default ControlShapes;
