import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PlaceHolder } from '../Primatives/ControlPrimatives';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const ControlGroupButtons = ({ updateInputValue, value }) => {
  const onSliderChange = (changedValue) => {
    updateInputValue(String(changedValue));
  };

  return (
    <Row className="justify-content-md-center">
      <Col sm={8}>
        <PlaceHolder className="pb-2 text-center">
          <h4 className="no-select">
            Height:&nbsp;
            {value}
            {value ? '"' : ''}
          </h4>
        </PlaceHolder>
      </Col>
      <Col
        sm={8}
        className="pb-3"
      >
        <SliderWithTooltip
          min={36}
          max={96}
          onChange={onSliderChange}
          railStyle={{ height: 20 }}
          trackStyle={{ height: 20 }}
          tipProps={{ overlayClassName: 'foo', placement: 'bottom' }}
          handleStyle={{
            borderColor: '#c5d1cf',
            height: 35,
            width: 35,
            marginLeft: -14,
            marginTop: -9,
            backgroundColor: '#266294',
          }}
        />
      </Col>
    </Row>
  );
};

ControlGroupButtons.propTypes = {
  value: PropTypes.string,
  updateInputValue: PropTypes.func.isRequired,
};

ControlGroupButtons.defaultProps = {
  value: '',
};

export default ControlGroupButtons;
