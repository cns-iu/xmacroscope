import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';

function RunnerIcon(props) {
  const imagePath = process.env.NODE_ENV === 'development' ? '/' : '/images/';

  const { icon } = props;
  return (
    <Container>
      <Row>
        <Col className="col-4 mx-auto text-center">
          <img className="text-center" width={300} alt="Icon" src={`${imagePath}ico-${icon}.png`} />
        </Col>
        <h1 className="text-center pt-2">
          Remember your shape and look for it on the graph.
        </h1>
      </Row>
    </Container>
  );
}

RunnerIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default RunnerIcon;
