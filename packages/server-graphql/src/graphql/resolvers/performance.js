import baseResolver from './baseResolver';
import db from '../../db/models/index';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

// Load a performance
const performance = baseResolver
  .createResolver((root, args, context) => {
    const { user: contextUser } = context;
    let activeUser = null;
    if (contextUser) {
      const { sub } = contextUser;
      activeUser = db.user.findOne({
        where: {
          sub,
        },
        include: [
          { model: db.role },
        ],
      });
    }
  });

//------------------------------------------------------------------------------
// Mutations
//------------------------------------------------------------------------------

// Create a performance
const createPerformance = baseResolver
  .createResolver((root, args, context) => db.performance.create({
    type: args.input.type,
    details1: args.input.details1,
    details2: args.input.details2,
  }));

const PerformanceResolvers = {
  Query: {
    performance,
  },
  Mutation: {
    createPerformance,
  },
};

export default PerformanceResolvers;
