import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import DisplayShape from '../Components/DisplayShape';

function RunnerIcon(props) {
  const { color, shape } = props;
  return (
    <div className="d-flex align-items-center flex-wrap align-self-end">
      <Col
        sm={12}
        className="align-self-end mx-auto"
      >
        <div className="pt-3 pb-3">
          <DisplayShape
            color={color}
            shape={shape}
            shapeTransform="translate(50, 50) scale(.75)"
            width="45%"
            margin="auto"
          />
        </div>
      </Col>
      <Col
        sm={12}
        className="align-self-start mx-auto"
      >
        <h1 className="text-center pt-2">
            Remember your shape and look for it on the graph.
        </h1>
      </Col>
    </div>
  );
}

RunnerIcon.propTypes = {
  color: PropTypes.string.isRequired,
  shape: PropTypes.string.isRequired,
};

export default RunnerIcon;
