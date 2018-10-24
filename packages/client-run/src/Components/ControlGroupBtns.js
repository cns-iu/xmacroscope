import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const ControlGroupBtns = props => (
  <ButtonGroup size="lg">
    {
      props.options.map(opt => (
        <Button key={opt} onClick={() => { this.props.updateInputValue(opt); }}>
          {opt}
        </Button>
      ))
    }
  </ButtonGroup>
);

export default ControlGroupBtns;
