import baseResolver from './baseResolver';
import db from '../../db/models/index';

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
    Runs: {
      start: args.run.start,
      opponent: args.run.opponent,
      opponentName: args.run.opponentName,
    },
  }, {
    include: [db.run],
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
