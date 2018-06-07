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

// Create a run
const runStart = baseResolver
  .createResolver((root, args) => {
    console.log(args);
    console.log('----^ ^ ^ ^ ^ args ^ ^ ^ ^ ^----');
    return db.run.create({
      opponent: args.run.opponent,
      start: args.run.start,
    });
  });

const RunResolver = {
  Mutation: {
    runStart,
  },
};

export default RunResolver;
