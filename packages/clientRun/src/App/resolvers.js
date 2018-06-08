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
    updateRunLocal: (_, { status, opponent }, { cache }) => {
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
