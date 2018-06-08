//
// Defaults for local state
//
export const defaults = {
  currentRace: {
    __typename: 'CurrentRace',
    opponent: 'none',
    opponentTime: 0,
    status: 'startup',
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRunLocal: (_, { status, opponent, opponentTime }, { cache }) => {
      const data = {
        currentRace: {
          __typename: 'CurrentRace',
          opponent,
          opponentTime,
          status,
        },
      };
      cache.writeData({ data });
      return data;
    },
  },
};
