import React from 'react';
import { Button } from 'reactstrap';
import Mousetrap from 'mousetrap';
import Constants from '../RaceManager/Constants';
import AvatarButton from './AvatarButton';

class Start extends React.Component {

  constructor(props) {
    super(props);
    this.handleAvatarSelection = this.handleAvatarSelection.bind(this);
  }

  componentDidMount() {

    // Bind keys for Keyboard
    // encoder input.
    Mousetrap.bind('s', () => {
      console.log('Keypress S');
      this.props.handleStartSignal();
    });

    Mousetrap.bind('e', () => {
      console.log('Keypress E');
      this.props.handleEndSignal();
    });

  }

  handleAvatarSelection(name) {
    // Do mutation
    console.log('onAvatarSelected', name);

    this.props.handleAvatarSelection(name);


    // TODO: Trigger avatar display to start
    // countdown here.

  }

  renderSelect() {

    return <div className='screen selection-screen'>

          <h1>Select your opponent</h1>

          <AvatarButton onAvatarSelected={this.handleAvatarSelection} name='Trygve'></AvatarButton>
          <AvatarButton onAvatarSelected={this.handleAvatarSelection} name='Bryan'></AvatarButton>
          <AvatarButton onAvatarSelected={this.handleAvatarSelection} name='Manuel'></AvatarButton>
          <AvatarButton onAvatarSelected={this.handleAvatarSelection} name='Bruce'></AvatarButton>
          <AvatarButton onAvatarSelected={this.handleAvatarSelection} name='Daniel'></AvatarButton>

      </div>;

  }

  renderGetReady() {

    return <div>
        <h1>Get ready!</h1>
        <h3>Go to starting line.</h3>
      </div>;

  }

  renderPleaseWait() {

    return <div>
        <h1>Race in progress...</h1>
        <h3>Please wait until race finishes</h3>
      </div>;

  }

  render() {

    let jsx = '';

    switch (this.props.raceState){
      case Constants.STATE_IDLE:
        jsx = this.renderSelect();
        break;
      case Constants.STATE_PRE_RACE:
        jsx = this.renderGetReady();
        break;
      case Constants.STATE_RACING:
      case Constants.STATE_POST_RACE:
        jsx = this.renderPleaseWait();
        break;
      case Constants.STATE_ATTRACT_LOOP:
        // Currently no attract loop...
        console.log('Attract Loop start');
        break;
    };

    return <div className='screen selection-screen'>
              { jsx }
          </div>;

  }

}

Start.propTypes = {};
Start.defaultProps = {};

export default Start;
