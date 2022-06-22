import { User } from '../../../database/models';

const userQueries = {
  users: async (_, args) => {
    return await User.find({});
  },
  userCount: () => User.collection.countDocuments(),
  user: async (_, {id}) => {
    return await  User.findById(id)
  },
};

export default userQueries;
