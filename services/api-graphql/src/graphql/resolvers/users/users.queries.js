import { User } from '../../../database/models';

const userQueries = {
  users: async (_, args) => {
    return await User.find();
  },
  user: async (_, {id}) => {
    return await  User.findById(id)
  },
};

export default userQueries;
