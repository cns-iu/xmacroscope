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
    <>
      <PlaceHolder className="pb-2 text-center">
        <h4 className="no-select">
          {height
            ? `${heightFeet}' ${heightInches}"`
            : value}
        </h4>
      </PlaceHolder>
      <Row>
        <Col>
          <div className="vertical-slider">
            <SliderWithTooltip
              className="slider-custom"
              vertical
              min={min}
              max={max}
              onChange={onSliderChange}
              railStyle={{ width: 16 }}
              trackStyle={{ width: 16 }}
              tipProps={{ overlayClassName: 'foo', placement: 'right' }}
              handleStyle={{
                borderColor: '#c5d1cf',
                height: 35,
                width: 35,
                marginLeft: -10,
                marginTop: -9,
                backgroundColor: '#266294',
              }}
            />
          </div>
        </Col>
      </Row>
    </>
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
