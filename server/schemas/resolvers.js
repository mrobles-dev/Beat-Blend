const { User } = require('../models');

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error(error);
      throw new Error('Failed to fetch user');
      }
    },
    getUsers: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        console.error(error);
      throw new Error('Failed to fetch users');
      }
    },
  },
  Mutation: {
    createUser: async (_, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        return user;
      } catch (error) {
        console.error(error);
      throw new Error('Failed to create user');
      }
    },
    updateUser: async (_, { id, username, email }) => {
      try {
        const user = await User.findByIdAndUpdate(id, { username, email }, { new: true });
        return user;
      } catch (error) {
        console.error(error);
      throw new Error('Failed to update user');
      }
    },
  },
};

module.exports = resolvers;
