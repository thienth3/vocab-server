export default /* GraphQL */ `
  type User {
    _id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    currentUser: User!
  }

  extend type Mutation {
    updateUser(
      email: String
      password: String
      newPassword: String
    ): User!
  }
`;
