import { userMutations, userQueries } from './users';
;

const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
};

export default resolvers;