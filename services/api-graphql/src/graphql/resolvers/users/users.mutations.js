import { User } from '../../../database/models';

const userMutations = {
  createUser: async (_, {user}) => {
    const newUser = new User(user)
    return await newUser.save()
  },
  updateUser: async (_, args) => {},
};

export default userMutations;
