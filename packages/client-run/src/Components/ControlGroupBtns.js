import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'reactstrap';
import { StyledBTN } from '../Primatives/BasePrimatives';

const ControlGroupBtns = props => (
  <ButtonGroup size="lg pb-3">
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
  options: PropTypes.array,
  value: PropTypes.string,
};
ControlGroupBtns.defaultProps = {
  options: ['ss'],
  value: '',
};


export default ControlGroupBtns;
