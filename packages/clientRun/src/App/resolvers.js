//
// Defaults for local state
//
export const defaults = {
  opponent: '',
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    // TODO: write a resolver here for selecting an opponent
    // obj, args, context, info
    selectOpponent: (_, opponent, { cache }) => {
      const data = {
        opponent,
      };
      cache.writeData({ data });
      return opponent;
    },
  },
};
