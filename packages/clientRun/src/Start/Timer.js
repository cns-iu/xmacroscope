import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: props.milliseconds,
      tick: props.tick,
    };
    this.decrementTimer = this.decrementTimer.bind(this);
  }

  componentWillMount() {
    this.timer = setInterval(this.decrementTimer, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  decrementTimer() {
    if (this.state.timer < 0) {
      clearInterval(this.timer);
      this.props.completion();
    } else {
      const initialTimer = this.state.timer;
      this.setState({ timer: initialTimer - 100 });
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
  milliseconds: PropTypes.number.isRequired,
  completion: PropTypes.func.isRequired,
  tick: PropTypes.number,
};

Timer.defaultProps = {
  tick: 100,
};

export default Timer;
