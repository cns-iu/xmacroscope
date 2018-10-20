import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import DisplayShape from '../Components/DisplayShape';

function RunnerIcon(props) {
  const { color, shape } = props;
  return (
    <Row>
      <Col
        xs={12}
        className="p-5"
      >
        <DisplayShape
          color={color}
          shape={shape}
          shapeTransform="translate(50, 50) scale(.75)"
          width="30%"
          margin="auto"
        />
        <Col
          xs={6}
          className="p-5 mx-auto"
        >
          <h1 className="text-center">
            Remember your shape and look for it on the graph.
          </h1>
        </Col>
      </Col>
    </Row>
  );
}

RunnerIcon.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
};

export default RunnerIcon;
