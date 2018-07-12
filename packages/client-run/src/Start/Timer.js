import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: props.direction === 'down'
        ? (Math.abs(props.start - props.end))
        : (props.start),
    };
    this.incrementTimer = this.incrementTimer.bind(this);
  }

  componentWillMount() {
    this.timer = setInterval(
      this.incrementTimer,
      this.props.tick,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  incrementTimer() {
    const { direction, stop } = this.props;
    // Pick the appropriate operator for check when the timer is done
    const op = direction === 'down' ? 'gt' : 'lt';
    const operators = {
      gt(a, b) {
        return a > b;
      },
      lt(a, b) {
        return a < b;
      },
    };

    // Increment the timer in the correct direction
    const tick = direction === 'down' ? this.props.tick * -1 : this.props.tick;
    if (this.state.timer === this.props.end || stop) {
      clearInterval(this.timer);
      this.props.completion();
    } else {
      const newTimer = (this.state.timer + tick);
      this.setState({
        timer: (operators[op](newTimer, this.props.end))
          ? (newTimer)
          : this.props.end,
      });
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.timer}
      </Fragment>
    );
  }
}

Timer.propTypes = {
  direction: PropTypes.oneOf(['up', 'down']).isRequired,
  end: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  completion: PropTypes.func,
  tick: PropTypes.number,
  stop: PropTypes.bool,
};

Timer.defaultProps = {
  completion: () => {},
  tick: 100,
  stop: false,
};

export default Timer;
