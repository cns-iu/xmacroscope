//
// Opponent select view
//
// This includes a temporary implementation of the keypress system
// We're having to replicate some of the local Mutation code that's also
// used in the buttons. We should think about how to re-architect this for
// less repetition.
//
import React, { Fragment } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import OpponentSelectButtons from './OpponentSelectButtons';
import HomeButton from './HomeButton';

const SELECT_RUN = gql`
  mutation SelectRun(
  $run: RunSelectInput!
  ) {
    SelectRun(
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
          activeRun: {
            __typename: 'ActiveRun',
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
    {updateRun => (
      <Fragment>
        <OpponentSelectButtons keypress={updateRun} />
        <HomeButton />
      </Fragment>
    )}
  </Mutation>
);

export default OpponentSelect;
