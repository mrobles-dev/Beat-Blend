const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    getUser(id: ID!): User!
    getUsers: [User!]!
    getComments: [Comment!]!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    addComment(thoughtId: ID!, commentText: String!): Comment
    updateUser(id: ID!, username: String!, email: String!): User!
    deleteUser(id: ID!): User!
  }
`;

module.exports = typeDefs;
