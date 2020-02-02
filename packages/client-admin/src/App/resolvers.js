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
    height: null,
    icon: null,
    latitude: null,
    longitude: null,
    state: null,
    zipCode: null,
    org: null,
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRun: (_, {
      runId, status, ageGroup, color, height, icon, latitude,
      longitude, state, zipCode, org,
    },
    { cache }) => {
      const data = {
        activeRun: {
          __typename: 'ActiveRun',
          runId,
          status,
          ageGroup,
          color,
          height,
          icon,
          latitude,
          longitude,
          state,
          zipCode,
          org,
        },
      };
      cache.writeData({ data });
      return data;
    },
  },
};
