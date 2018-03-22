import React from 'react';
import mouseTrap from 'react-mousetrap';
import Start from './Start';

class StartKeyCapture extends React.Component {
  componentWillMount() {
    this.props.bindShortcut('s', this._goToNext);
  }

  _goToNext() {
    console.log('YOUREPRESSINGS');
    // do mutation here

    // this.props.unbindShortcut('right');
  }

  // render() {
  //   return (
  //     <Start />
  //   );
  // }
}

StartKeyCapture.propTypes = {};
StartKeyCapture.defaultProps = {};

export default mouseTrap(Start);
