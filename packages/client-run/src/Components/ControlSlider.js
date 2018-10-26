import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

const ControlGroupBtns = (props) => {
  const onSliderChange = (value) => {
    console.log(value);
    props.updateInputValue(value);
  };
  return (
    <Row>
      <Col sm={8}>
        <SliderWithTooltip
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
            backgroundColor: '#fdff5f',
          }}
        />
      </Col>
      <Col sm={4}>
        <h3>
          {props.value}
          {props.value ? '"' : ''}
        </h3>
      </Col>
    </Row>
  );
};

ControlGroupBtns.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
};


export default ControlGroupBtns;
