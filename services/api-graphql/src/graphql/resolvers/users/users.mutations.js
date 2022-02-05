import { User } from '../../../database/models';

const userMutations = {
  createUser: async (_, {user}) => {
    const newUser = new User(user)
    return await newUser.save()
  },
  updateUser: async (_, { id, user }) => {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { ...user },
      },
      { new: true }
    );

    return updatedUser;
  },
};

export default userMutations;
