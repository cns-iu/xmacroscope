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

    this.finishRun = this.finishRun.bind(this);
  }

  componentWillMount() {
    this.props.bindShortcut('e', this.finishRun);
  }

  finishRun() {
    this.setState({ timerStopped: true });
    this.props.runFinish({
      variables: {
        run: {
          id: this.props.runId,
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
        onClick={this.finishRun}
      >
        Lane {this.props.lane} finish
      </Button>
    );
  }
}

export default mouseTrap(RunFinishButton);
