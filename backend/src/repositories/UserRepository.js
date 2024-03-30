import User from '../models/User.js';

const UserRepository = {
  create: async (userData) => {
    const user = new User(userData);
    return await user.save();
  },

  findAll: async () => {
    return await User.find();
  },

  findById: async (id) => {
    return await User.findById(id);
  },

  updateById: async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
  },

  deleteById: async (id) => {
    return await User.findByIdAndDelete(id);
  },

  findByEmail: async (email) => {
    return await User.findOne({email: email})
  }
};

export default UserRepository;
