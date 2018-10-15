import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const getTimerFormatted = (milliseconds) => {
  const seconds = Math.floor((milliseconds / 1000));
  const subSeconds = ((milliseconds - (seconds * 1000)) / 10);
  return `${seconds}:${subSeconds}`;
};

class Timer extends React.Component {
  constructor(props) {
    super(props);

    const timerMilliseconds = props.direction === 'down'
      ? (Math.abs(props.start - props.end))
      : (props.start);

    const timerSeconds = Math.floor((timerMilliseconds / 1000));

    this.state = {
      timer: timerMilliseconds,
      timerFormatted: getTimerFormatted(timerMilliseconds),
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
      const newTimerMilliseconds = (operators[op](newTimer, this.props.end))
        ? (newTimer)
        : this.props.end;

      this.setState({
        timer: newTimerMilliseconds,
        timerFormatted: getTimerFormatted(newTimerMilliseconds),
      });
    }
  }

  render() {
    return (
      <div className="text-monospace">
        {this.state.timerFormatted}
      </div>
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
  completion: () => {
  },
  tick: 10,
  stop: false,
};

export default Timer;
