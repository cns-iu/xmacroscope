import { createError, isInstance } from 'apollo-errors';
import { isAuthenticatedResolver, isAdminResolver } from './acl';

const ExposedError = createError('ExposedError', {
  message: 'An unknown error has occurred',
});

const banUser = isAdminResolver.createResolver(
  (root, { input }, { models: { UserModel } }) => UserModel.ban(input),
  (root, args, context, error) => {
    /*
      For admin users, let's tell the user what actually broke
      in the case of an unhandled exception
    */

    if (!isInstance(error)) {
      throw new ExposedError({
      // overload the message
        message: error.message,
      });
    }
  },
);

const AdminResolvers = {
  Mutation: {
    banUser,
  },
};

export default AdminResolvers;
