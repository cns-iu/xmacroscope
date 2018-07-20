//
// Opponent select view
//
// This includes a temporary implementation of the keypress system
// We're having to replicate some of the local Mutation code that's also
// used in the buttons. We should think about how to re-architect this for
// less repetition.
//
import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import OpponentSelectButtons from './OpponentSelectButtons';

const SELECT_RUN = gql`
  mutation RunSelect(
  $run: RunSelect!
  ) {
    runSelect(
      run: $run
    )
  }
`;

const OpponentSelect = () => (
  <Mutation
    mutation={SELECT_RUN}
    update={(cache) => {
      // Fast animal is temporarily encoded for the start keypress.
      cache.writeData({
        data: {
          activeRace: {
            __typename: 'ActiveRace',
            status: 'runTimerPre',
            opponent: 'fast-animal',
            opponentName: 'Fast animal',
            opponentTime: 1500,
          },
        },
      });
    }}
    variables={{
      run: {
        opponent: 'fast-animal',
        opponentName: 'Fast animal',
        opponentTime: 1500,
      },
    }}
  >
    {updateRace => (
      <OpponentSelectButtons keypress={updateRace} />
    )}
  </Mutation>
);

export default OpponentSelect;
