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

    this.finishRunTrigger = this.finishRunTrigger.bind(this);
  }

  componentWillMount() {
    this.props.bindShortcut('e', this.finishRunTrigger);
  }

  finishRunTrigger() {
    this.setState({ timerStopped: true });
    this.props.finishRun({
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
        onClick={this.finishRunTrigger}
      >
        Lane {this.props.lane} finish
      </Button>
    );
  }
}

export default mouseTrap(RunFinishButton);
