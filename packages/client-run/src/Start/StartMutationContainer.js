/**
 * Mutation container for editing a profile
 */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Query } from 'react-apollo';
import SEND_MESSAGE from './graphql/SendMessage.graphql';
import Start from './StartAvatar';
import RaceManager from '../RaceManager/Manager';

class StartContainer extends React.Component {

  /**
   * Pass form values to the mutation query and go to the profile view
   */
  mutationSendMessage = () => {
    console.log('StartMutationContainer.mutationSendMessage');
    this.props.mutate({
      variables: {
        type: 'run-selected',
        timestamp: new Date().toISOString(),
      },
    });
  };

  dispatchStartSignal = () => {
    console.log('StartMutationContainer.dispatchStartSignal');

    // RaceManager.initiateNewRace(name);

    // TODO - set lane is occupied

  };

  dispatchEndSignal = () => {
    console.log('StartMutationContainer.dispatchEndSignal x');

    setInterval(()=> {
      console.log(RaceManager.getRaceState());
    }, 3000);

  };

  dispatchAvatarSelection = (name) => {
    console.log('StartMutationContainer.dispatchAvatarSelection', name);
    RaceManager.initiateNewRace(name);

  };

  render() {
    return (
      <Start
        handleClick={this.mutationSendMessage}
        handleStartSignal={this.dispatchStartSignal}
        handleEndSignal={this.dispatchEndSignal}
        handleAvatarSelection={this.dispatchAvatarSelection}
        raceState={RaceManager.getRaceState()}
      />
    );
  }
}

StartContainer.propTypes = {
  mutate: PropTypes.func.isRequired,
};

const StartSendMessageMutationContainer = graphql(SEND_MESSAGE)(StartContainer);

export default StartSendMessageMutationContainer;
