/**
 * Mutation container for editing a profile
 */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import SEND_MESSAGE from './graphql/SendMessage.graphql';
import Start from './Start';

class StartContainer extends React.Component {
  /**
   * Pass form values to the mutation query and go to the profile view
   */
  mutationSendMessage = () => {
    this.props.mutate({
      variables: {
        type: 'run-selected',
        timestamp: new Date().toISOString(),
      },
    });
  };

  render() {
    return (
      <Start
        handleClick={this.mutationSendMessage}
      />
    );
  }
}

StartContainer.propTypes = {
  mutate: PropTypes.func.isRequired,
};

const StartSendMessageMutationContainer = graphql(SEND_MESSAGE)(StartContainer);

export default StartSendMessageMutationContainer;
