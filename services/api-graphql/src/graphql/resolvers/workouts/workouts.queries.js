import { Workout } from '../../../database/models';

const workoutQueries = {
  workouts: async (_, args) => {
    return await Workout.find();
  },
  workout: async (_, {id}) => {
    return await  Workout.findById(id)
  },
  workoutsCount: () => Workout.collection.countDocuments(),
};

export default workoutQueries;
