import Sequelize from 'sequelize';
import _ from 'lodash';
import baseResolver from './baseResolver';
import { isAuthenticatedResolver } from './acl';
import db from '../../db/models/index';

//------------------------------------------------------------------------------
// Queries
//------------------------------------------------------------------------------

//
// Load the auth'd user record
//
// We allow this query from everyone, bceuase the argument for resolving
// it is the auth JWT token which we verify at the server level.
// So this query will evaluate whether a user is in the system for anonymous
// queries, and return user information for valid auth users.
//
// Returns a User data type
//
const user = baseResolver
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

    return activeUser;
  });

const UserResolvers = {
  Query: {
    user,
  },
};

export default UserResolvers;
