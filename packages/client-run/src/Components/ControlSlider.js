import React from 'react';
import { Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';

const ControlGroupBtns = props => (
  <Row>
    <Col sm={8}>
      <Slider
        railStyle={{ height: 12 }}
        trackStyle={{ height: 12 }}
        handleStyle={{
          borderColor: '#c5d1cf',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: '#fdff5f',
        }}
      />
    </Col>
    <Col sm={4}>
      <h4>height: 55"</h4>
    </Col>
  </Row>
);

ControlGroupBtns.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
};


export default ControlGroupBtns;
