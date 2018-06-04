import gql from 'graphql-tag';

//
// Defaults for local state
//
export const defaults = {
  currentRace: {
    __typename: 'CurrentRace',
    opponent: 'none',
    status: 'startup',
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRun: (_, { status, opponent }, { cache }) => {
      const data = {
        currentRace: {
          __typename: 'CurrentRace',
          opponent,
          status,
        },
      };
      cache.writeData({ data });
      return data;
    },
  },
};
