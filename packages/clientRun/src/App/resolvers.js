//
// Defaults for local state
//
export const defaults = {
  currentRace: {
    __typename: 'CurrentRace',
    opponent: 'none',
    opponentTime: 0,
    raceId: null,
    status: 'startup',
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRunLocal: (_, {
      status, opponent, opponentTime, raceId,
    },
    { cache }) => {
      const data = {
        currentRace: {
          __typename: 'CurrentRace',
          opponent,
          opponentTime,
          raceId,
          status,
        },
      };
      cache.writeData({ data });
      return data;
    },
  },
};
