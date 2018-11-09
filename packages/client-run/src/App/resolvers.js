//
// Defaults for local state
//
export const defaults = {
  activeRun: {
    __typename: 'ActiveRun',
    runId: null,
    status: 'preSignupForm',
    ageGroup: null,
    color: null,
    favoriteActivity: null,
    height: null,
    icon: null,
    latitude: null,
    longitude: null,
    state: null,
    zipCode: null,
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRun: (_, {
      runId, status, ageGroup, color, favoriteActivity, height, icon, latitude,
      longitude, state, zipCode,
    },
    { cache }) => {
      const data = {
        activeRun: {
          __typename: 'ActiveRun',
          runId,
          status,
          ageGroup,
          color,
          favoriteActivity,
          height,
          icon,
          latitude,
          longitude,
          state,
          zipCode,
        },
      };
      cache.writeData({ data });
      return data;
    },
  },
};
