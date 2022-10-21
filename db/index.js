require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

import mongoose from 'mongoose';
import './models/Highlight';
import './models/Reference';
import './models/User';

const dev = process.env.NODE_ENV !== 'production';
if (dev) {
  mongoose.set('debug', true);
}
// Document https://mongoosejs.com/docs/deprecations.html#-findandmodify-
mongoose.set('useFindAndModify', false);

export default async () => {
  console.log('connecting to MongoDB');
  return await mongoose.connect(process.env.MONGO_URL);
};
