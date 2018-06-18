import PropTypes from 'prop-types';
import React from 'react';
import { Mutation } from 'react-apollo';
import { Row, Col, Button } from 'reactstrap';
import OponentResetButton from './OpponentResetButton';
import START_RUN from './graphql/StartRun.graphql';
import OpponentStartButton from './OpponentStartButton';

const RaceStart = ({ race }) => (
  <Row>
    <Col>
      <Row>
        <Col>
          <OpponentStartButton race={race} />
        </Col>
        <Col>
          <OponentResetButton />
        </Col>
      </Row>
    </Col>
  </Row>
);

RaceStart.propTypes = {
  race: PropTypes.string.isRequired,
};

export default RaceStart;
