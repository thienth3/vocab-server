import { merge } from 'lodash';
import auth from './auth';
import user from './user';
import vocab from './vocab';

// use merge here to avoid overriding
export default merge(user, auth, vocab);
