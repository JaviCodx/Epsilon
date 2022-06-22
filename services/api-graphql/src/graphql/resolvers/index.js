import { userMutations, userQueries } from './users';
import { workoutQueries } from './workouts';
import workoutMutations from './workouts/workouts.mutations';


const resolvers = {
  Query: {
    ...userQueries,
    ...workoutQueries
  },
  Mutation: {
    ...userMutations,
    ...workoutMutations
  },
};

export default resolvers;