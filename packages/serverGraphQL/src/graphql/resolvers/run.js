import baseResolver from './baseResolver';
import db from '../../db/models/index';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

// Load a run
// TODO: create a single run query
// TODO: create a n runs query

//------------------------------------------------------------------------------
// Mutations
//------------------------------------------------------------------------------

// Create a run, return the ID
const runStart = baseResolver
  .createResolver((root, args) => db.run.create({
    opponent: args.run.opponent,
    start: args.run.start,
  }).then(createdRun => createdRun.id));

// Update an existing run record with a finish time, return the ID
const runFinish = baseResolver
  .createResolver((root, args) => db.run.update(
    { end: args.run.finish },
    { where: { id: args.run.id } },
  ));

const RunResolver = {
  Mutation: {
    runStart,
    runFinish,
  },
};

export default RunResolver;
