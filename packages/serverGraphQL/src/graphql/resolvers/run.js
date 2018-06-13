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
  .createResolver((root, args) => {
    console.log(args);
    console.log('----^ ^ ^ ^ ^ args ^ ^ ^ ^ ^----');
    return db.run.create({
      opponent: args.run.opponent,
      start: args.run.start,
    })
      .then((createdRun) => {
        console.log('Updating a run record');
        return createdRun.id;
      });
  });

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
