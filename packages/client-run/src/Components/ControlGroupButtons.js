import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'reactstrap';
import { StyledBTN } from '../Primatives/BasePrimatives';

const ControlGroupButtons = ({
  options, value, icon, iconImages, iconImageSize, updateInputValue,
}) => (
  <ButtonGroup size="lg pb-3">
    {
      options.map(option => (
        <StyledBTN
          className="no-select"
          selected={option === value}
          key={option}
          onClick={() => {
            updateInputValue(option);
          }}
        >
          {
            icon
              ? <img alt="temp" width={iconImageSize} src={iconImages[option]} />
              : option
          }
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
