const { User, Comment, Bio } = require('../models');
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        return user;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user");
      }
    },
    getUsers: async () => {
      try {
        const users = await User.find({});
        return users;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch users");
      }
    },
    getComment: async (_, { id }) => {
      try {
        const comment = await Comment.findById(id);
        return comment;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch user");
      }
    },
    getComments: async () => {
      try {
        console.log('anything')
        const comments = await Comment.find({});
        return comments;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch comments");
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
        throw new Error("Failed to create user");
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
     addComment: async (_, { commentText }, context) => {
      if (context.user) {
        const comment = new Comment({
          commentText,
          commentAuthor: context.user.username
        });

        await comment.save();

        return comment;
      }
      
      // throw new AuthenticationError("You need to be logged in!");
    },
  
     addBio: async (_, { bioText }, context) => {
      if (context.user) {
        const comment = new Bio({
          commentText,
          commentAuthor: context.user.username
        });

        await comment.save();

        return comment;
      }
      
      // throw new AuthenticationError("You need to be logged in!");
    },
  

    updateUser: async (_, { id, username, email }) => {
      try {
        const user = await User.findByIdAndUpdate(
          id,
          { username, email },
          { new: true }
        );
        return user;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to update user");
      }
    },
  },
};

module.exports = resolvers;
