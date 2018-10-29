import React from 'react';
import PropTypes from 'prop-types';
import DisplayShape from './DisplayShape';
import { ControlShapesContainer } from '../Primatives/ControlPrimatives';

const ControlShapes = props => (
  <ControlShapesContainer>
    {
      props.options.map(opt => (
        <DisplayShape
          type="controlDisplay"
          selected={opt === props.value}
          key={opt}
          value={opt}
          updateInputValue={props.updateInputValue}
          color="black"
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
  updateInputValue: PropTypes.updateInputValue,
};


export default ControlShapes;
