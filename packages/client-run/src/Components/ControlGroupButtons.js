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
  options: PropTypes.array.isRequired,
  icon: PropTypes.bool,
  iconImages: PropTypes.objectOf(PropTypes.string),
  iconImageSize: PropTypes.number,
  value: PropTypes.string,
};
ControlGroupButtons.defaultProps = {
  value: '',
  icon: false,
  iconImages: {},
  iconImageSize: 10,
};

export default ControlGroupButtons;
