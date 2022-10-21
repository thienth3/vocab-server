import Auth from './Auth';
import User from './User';
import Vocab from './Vocab';

const Root = /* GraphQL */ `
  # The dummy queries and mutations are necessary because
  # graphql-js cannot have empty root types and we only extend
  # these types later on
  # Ref: apollographql/graphql-tools#293
  scalar JSON
  scalar JSONObject
  type Query {
    dummy: String
  }
  type Mutation {
    dummy: String
  }
  type Subscription {
    dummy: String
  }
  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`;

export default [Root, User, Auth, Vocab];
