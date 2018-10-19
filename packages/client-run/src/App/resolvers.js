import generatePerson from '../Signup/generatePerson';
//
// Defaults for local state
//
const persona = generatePerson();
export const defaults = {
  activeRun: {
    __typename: 'ActiveRun',
    opponent: 'none',
    opponentName: 'none',
    opponentTime: 0,
    runId: null,
    status: 'signupForm',
    ...persona,
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRun: (_, {
      status, opponent, opponentName, opponentTime, runId, name, icon, color,
      gender, ageGroup, favoriteActivity, handedness, height, siblings,
      zipCode, latitude, longitude, state,
    },
    { cache }) => {
      const data = {
        activeRun: {
          __typename: 'ActiveRun',
          opponent,
          opponentName,
          opponentTime,
          runId,
          status,
          name,
          icon,
          gender,
          ageGroup,
          favoriteActivity,
          handedness,
          height,
          siblings,
          zipCode,
          latitude,
          longitude,
          state,
          color,
        },
      };
      cache.writeData({ data });
      return data;
    },
  },
};
