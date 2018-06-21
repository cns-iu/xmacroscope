//
// Defaults for local state
//
export const defaults = {
  activeRace: {
    __typename: 'ActiveRace',
    opponent: 'none',
    opponentName: 'none',
    opponentTime: 0,
    raceId: null,
    status: 'opponentSelect',
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRace: (_, {
      status, opponent, opponentName, opponentTime, raceId,
    },
    { cache }) => {
      const data = {
        activeRace: {
          __typename: 'ActiveRace',
          opponent,
          opponentName,
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
