import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import mouseTrap from 'react-mousetrap';
import moment from 'moment';

class RunFinishKeypress extends React.Component {
  constructor(props) {
    super(props);

    this.finishRunTrigger = this.finishRunTrigger.bind(this);
  }

  componentWillMount() {
    const { bindShortcut } = this.props;
    bindShortcut('e', this.finishRunTrigger);
  }

  finishRunTrigger() {
    const { finishRun, runId } = this.props;
    finishRun({
      variables: {
        run: {
          id: runId,
          finish: moment(),
        },
      },
    });
  }

  render() {
    return (<Fragment>&nbsp;</Fragment>);
  }
}

RunFinishKeypress.propTypes = {
  bindShortcut: PropTypes.func.isRequired,
  finishRun: PropTypes.func.isRequired,
  runId: PropTypes.string.isRequired,
};

export default mouseTrap(RunFinishKeypress);
