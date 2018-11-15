import React from 'react';
import PropTypes from 'prop-types';
import ReactHowler from 'react-howler';
import TimerWrapper from '../Primatives/TimerPrimatives';
import CountDown from '../Media/countDown.wav';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    const {
      countDownSound, direction, start, end,
    } = this.props;
    this.state = {
      countDownSound,
      timer: direction === 'down' ? Math.abs(start - end) : start,
    };
    this.incrementTimer = this.incrementTimer.bind(this);
  }

  componentWillMount() {
    this.timer = setInterval(this.incrementTimer, this.props.tick);
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
      const newTimer = this.state.timer + tick;
      this.setState({
        timer: operators[op](newTimer, this.props.end)
          ? newTimer
          : this.props.end,
      });
    }
  }

  // Add two seconds to playing conditional to
  // handle clip delay

  render() {
    return (
      <TimerWrapper displayTimer={this.props.displayTimer}>
        {this.state.timer}
        {this.state.countDownSound ? (
          <ReactHowler
            src={CountDown}
            playing={this.state.timer <= 8500}
          />
        ) : (
          ''
        )}
      </TimerWrapper>
    );
  }
}

Timer.propTypes = {
  displayTimer: PropTypes.bool.isRequired,
  direction: PropTypes.oneOf(['up', 'down']).isRequired,
  countDownSound: PropTypes.bool,
  end: PropTypes.number.isRequired,
  start: PropTypes.number.isRequired,
  completion: PropTypes.func,
  tick: PropTypes.number,
  stop: PropTypes.bool,
};

Timer.defaultProps = {
  completion: () => {
  },
  tick: 100,
  stop: false,
  countDownSound: false,
};

export default Timer;
