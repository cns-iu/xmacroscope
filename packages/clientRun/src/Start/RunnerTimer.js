import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Timer from './Timer';

class RunnerTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timerStopped: false,
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      count: this.state.count + 1,
    });

    console.log('Button click');
  }

  render() {
    const { lane, raceTimeout } = this.props;
    const { timerStopped } = this.state;
    return (
      <Col>
        <Row>
          <Col>
            <h3>Lane {lane} race time</h3>
            <Timer
              completion={() => {
                console.log('Done in the lane');
              }}
              stop={timerStopped}
              direction="up"
              start={0}
              end={raceTimeout}
            /> milliseconds
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              disabled={timerStopped}
              color="primary"
              onClick={() => {
              console.log('lane1');
              this.setState({
                timerStopped: true,
              });
            }}
            >
              Lane {lane} finish
            </Button>
          </Col>
        </Row>
      </Col>
    );
  }
}

RunnerTimer.propTypes = {
  lane: PropTypes.string.isRequired,
};

export default RunnerTimer;
