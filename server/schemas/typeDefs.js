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
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    updateUser(id: ID!, username: String!, email: String!): User!
    deleteUser(id: ID!): User!
  }
`;

module.exports = typeDefs;
