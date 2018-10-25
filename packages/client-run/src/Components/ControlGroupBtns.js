import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { StyledBTN } from '../Primatives/BasePrimatives';

const ControlGroupBtns = props => (
  <ButtonGroup size="lg pb-4">
    {
      props.options.map(opt => (
        <StyledBTN
          selected={opt === props.value}
          key={opt}
          onClick={() => { props.updateInputValue(opt); }}
        >
          {opt}
        </StyledBTN>
      ))
    }
  </ButtonGroup>
);

ControlGroupBtns.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};


export default ControlGroupBtns;
