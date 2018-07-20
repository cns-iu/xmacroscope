import React from 'react';
import { Button } from 'reactstrap';
import mouseTrap from 'react-mousetrap';
import moment from 'moment';

class RunFinishButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerStopped: false,
    };

    this.finishRace = this.finishRace.bind(this);
  }

  componentWillMount() {
    this.props.bindShortcut('e', this.finishRace);
  }

  finishRace() {
    this.setState({ timerStopped: true });
    this.props.runFinish({
      variables: {
        run: {
          id: this.props.raceId,
          finish: moment(),
        },
      },
    });
  }

  render() {
    const { timerStopped } = this.state;
    return (
      <Button
        disabled={timerStopped}
        color="primary"
        onClick={this.finishRace}
      >
        Lane {this.props.lane} finish
      </Button>
    );
  }
}

export default mouseTrap(RunFinishButton);
