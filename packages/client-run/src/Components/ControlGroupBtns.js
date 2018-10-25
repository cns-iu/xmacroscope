import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';

const ControlGroupBtns = props => (
  <ButtonGroup size="lg">
    {
      props.options.map(opt => (
        <Button key={opt} onClick={() => { props.updateInputValue(opt); }} outline color="success">
          {opt}
        </Button>
      ))
    }
  </ButtonGroup>
);

ControlGroupBtns.propTypes = {
  options: PropTypes.array.isRequired,
};


export default ControlGroupBtns;
