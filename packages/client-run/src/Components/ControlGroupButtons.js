import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'reactstrap';
import { StyledBTN } from '../Primatives/BasePrimatives';

const ControlGroupButtons = ({ options, value, updateInputValue }) => (
  <ButtonGroup size="lg pb-3">
    {
      options.map(opt => (
        <StyledBTN
          className="no-select"
          selected={opt === value}
          key={opt}
          onClick={() => {
            updateInputValue(opt);
          }}
        >
          {opt}
        </StyledBTN>
      ))
    }
  </ButtonGroup>
);

ControlGroupButtons.propTypes = {
  updateInputValue: PropTypes.func.isRequired,
  options: PropTypes.array,
  value: PropTypes.string,
};
ControlGroupButtons.defaultProps = {
  options: ['ss'],
  value: '',
};

export default ControlGroupButtons;
