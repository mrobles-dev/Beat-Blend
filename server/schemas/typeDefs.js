const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    Comments: [Comment]!
  }
  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser(id: ID!): User!
    getUsers: [User!]!
    getComments: [Comment]
    getComment(commentId: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addComment(commentId: ID!, commentText: String!): Comment
    updateUser(id: ID!, username: String!, email: String!): User!
    deleteUser(id: ID!): User!
    userName: String
  }
`;

module.exports = typeDefs;
