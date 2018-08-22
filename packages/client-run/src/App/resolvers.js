import generatePersona from '../Signup/generatePersona';
//
// Defaults for local state
//
const persona = generatePersona();
export const defaults = {
  activeRace: {
    __typename: 'ActiveRace',
    opponent: 'none',
    opponentName: 'none',
    opponentTime: 0,
    raceId: null,
    status: 'signupForm',
    ...persona,
  },
};

//
// Resolvers for local state
//
export const resolvers = {
  Mutation: {
    updateRace: (_, {
      status, opponent, opponentName, opponentTime, raceId, name, icon, color,
      gender, age_group, favoriteActivity, handedness, height, siblings,
      zipcode, latitude, longitude, state,
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
          name,
          icon,
          gender,
          age_group,
          favoriteActivity,
          handedness,
          height,
          siblings,
          zipcode,
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
