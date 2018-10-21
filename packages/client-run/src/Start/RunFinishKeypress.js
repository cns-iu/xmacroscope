import React, { Fragment } from 'react';
import mouseTrap from 'react-mousetrap';
import moment from 'moment';

class RunFinishKeypress extends React.Component {
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
    return (<Fragment>&nbsp;</Fragment>);
  }
}

export default mouseTrap(RunFinishKeypress);

