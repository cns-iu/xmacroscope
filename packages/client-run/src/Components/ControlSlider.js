import React from 'react';
import { Col, Row } from 'reactstrap';
import { floor } from 'lodash';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PlaceHolder } from '../Primatives/ControlPrimatives';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const ControlSlider = ({
  updateInputValue, min, max, value, height,
}) => {
  const onSliderChange = (changedValue) => {
    updateInputValue(String(changedValue));
  };
  const heightFeet = floor((value / 12));
  const heightInches = value % 12;

  return (
    <Row className="justify-content-md-center">
      <Col sm={8}>
        <PlaceHolder className="pb-2 text-center">
          <h4 className="no-select">
            {height
              ? `${heightFeet}' ${heightInches}"`
              : value}
          </h4>
        </PlaceHolder>
      </Col>
      <Col
        sm={8}
        className="pb-3"
      >
        <SliderWithTooltip
          min={min}
          max={max}
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

ControlSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  height: PropTypes.bool,
  value: PropTypes.string,
  updateInputValue: PropTypes.func.isRequired,
};

ControlSlider.defaultProps = {
  value: '',
  height: false,
};

export default ControlSlider;
