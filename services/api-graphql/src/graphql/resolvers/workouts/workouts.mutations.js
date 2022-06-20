import { Workout } from '../../../database/models';

const workoutMutations = {
  createWorkout: async (_, {workout}) => {
    const newWorkout= new Workout(workout)
    return await newWorkout.save()
  },
  updateWorkout: async (_, { id, workout }) => {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      id,
      {
        $set: { ...workout },
      },
      { new: true }
    );

    return updatedWorkout;
  },
};
export default workoutMutations;
