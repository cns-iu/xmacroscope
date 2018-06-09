//
// Defaults for local state
//
export const defaults = {
  activeRace: {
    __typename: 'ActiveRace',
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
    updateRace: (_, {
      status, opponent, opponentTime, raceId,
    },
    { cache }) => {
      const data = {
        activeRace: {
          __typename: 'ActiveRace',
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
