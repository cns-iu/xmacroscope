import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { PlaceHolder } from '../Primatives/ControlPrimatives';


const SliderWithTooltip = createSliderWithTooltip(Slider);

const ControlGroupBtns = (props) => {
  const onSliderChange = (value) => {
    props.updateInputValue(String(value));
  };
  return (
    <Row className="justify-content-md-center">
      <Col sm={8}>
        <PlaceHolder className="pb-2 text-center">
          <h4>Height: {props.value}{props.value ? '"' : ''}</h4>
        </PlaceHolder>
      </Col>
      <Col sm={8} className="pb-3">
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
    </Row>
  );
};

ControlGroupBtns.propTypes = {
  value: PropTypes.string,
  updateInputValue: PropTypes.func.isRequired,
};

ControlGroupBtns.defaultProps = {
  value: '',
};

export default ControlGroupBtns;
