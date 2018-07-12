import baseResolver from './baseResolver';
import db from '../../db/models/index';
import pubsub from './subscriptions';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

// Load x runs starting with the most recent
const runs = baseResolver
  .createResolver((root, args) => db.run.findAll({ limit: args.lastX }));

//------------------------------------------------------------------------------
// Mutations
//------------------------------------------------------------------------------

// Keeping extraneous console statements and return helpers in the code
// while in active DB development.

// Create a run, return the ID
const runStart = baseResolver
  .createResolver((root, args) => db.person.create({
    name: args.run.persona.name,
    icon: args.run.persona.icon,
    color: args.run.persona.color,
    gender: args.run.persona.gender,
    ageGroup: args.run.persona.age_group,
    handedness: args.run.persona.handedness,
    zipcode: args.run.persona.zipcode,
    state: args.run.persona.state,
    Runs: {
      start: args.run.start,
      opponent: args.run.opponent,
      opponentName: args.run.opponentName,
    },
  }, {
    include: [db.run],
  })
    .then((createdPerson) => {
      // Publish a message with the race initiation data.
      const publishPayload = {
        raceInitiated: {
          type: 'race-initiated',
          timestamp: args.run.start,
          avatar: {
            id: args.run.opponent,
            name: args.run.opponentName,
            runMillis: args.run.opponentTime,
          },
        },
      };
      pubsub.publish('race-initiated', publishPayload);
      return createdPerson;
    }));

// Update an existing run record with a finish time, return the ID
const runFinish = baseResolver
  .createResolver((root, args) => db.run.update(
    { end: args.run.finish },
    { where: { id: args.run.id } },
  ).then((updatedRuns) => {
    console.log('Updating a run record');
    // Send message here
    return updatedRuns;
  }));

const RunResolver = {
  Query: {
    runs,
  },
  Mutation: {
    runStart,
    runFinish,
  },
};

export default RunResolver;
