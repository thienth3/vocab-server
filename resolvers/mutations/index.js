import auth from './auth';
import vocab from './vocab';
import user from './user';
export default {
  Mutation: {
    ...auth,
    ...user,
    ...vocab,
  }
};
