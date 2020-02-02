import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import personOptions from '../Signup/personOptions';

function RunnerIcon(props) {
  const { icon } = props;
  return (
    <div className="d-flex align-items-center flex-wrap align-self-end">
      <Col sm={12} className="align-self-end mx-auto">
        <div className="pt-3 pb-3">
          <img width={300} alt="Icon" src={personOptions.iconImages[icon]} />
        </div>
      </Col>
      <Col sm={12} className="align-self-start mx-auto">
        <h1 className="text-center pt-2">
          Remember your shape and look for it on the graph.
        </h1>
      </Col>
    </div>
  );
}

RunnerIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default RunnerIcon;
