# Add new models

## 1. Create model

First create a mongoose model and export under `models` dir. Following the example:

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  avatar: String,
  name: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('company', companySchema);

```

then import it into the `index.js`:

```
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

import mongoose from 'mongoose';
import './models/Comment';
import './models/Like';
import './models/Post';
// ------- New import here -------
import './models/Company';
import './models/User';

const dev = process.env.NODE_ENV !== 'production';
if (dev) {
  mongoose.set('debug', true);
}

export default async () => {
  console.log('connecting to MongoDB');
  return await mongoose.connect(process.env.MONGO_URL);
};

```

See [mongoose doc](https://mongoosejs.com/docs/) to understand how to create a model.

## 2. Create graphql gql for that model

Next we need to create graphq gql in `types` folder. See the following example:

```
// Company.js
export default
  type Company {
    _id: ID!
    owner: User!
    avatar: String
    name: String!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getAllCompanies: [Company!]
  }

  extend type Mutation {
    addCompany(owner: ID!, avatar: String, name: String!): Company!
  }
;
```

and import it into types/index.js like following:

```
import Auth from './Auth';
import Comment from './Comment';
// ------- New import here -------
import Company from './Company';
import Like from './Like';
import Post from './Post';
import User from './User';

const Root = /* GraphQL */ `
  # The dummy queries and mutations are necessary because
  # graphql-js cannot have empty root types and we only extend
  # these types later on
  # Ref: apollographql/graphql-tools#293
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

// ------- New import here -------
export default [Root, Post, User, Company, Comment, Like, Auth];

```

## 3. Implement query/mutation/subscription.

For `company` model, for `query` you can create new folder `company` under `resolvers/queries`

Inside company we have following files:

```
// This is getAllCompanies.js
export default async (parent, args, ctx) => {
  try {
    if (!ctx.user) throw new Error('Not authenticated');

    const company = ctx.db.model('company');
    return await company.find({}).exec();
  } catch (error) {
    throw new Error(error);
  }
};

```

and create new `index.js` file:

```
import getAllCompanies from './getAllCompanies';

export default {
  Query: {
    getAllCompanies
  }
};
```

and also need import company into the `resolvers/queries/index.js`:

```
import { merge } from 'lodash';

import user from './user';
import post from './post';
import comment from './comment';
import like from './like';
import auth from './auth';
// ---- New file -----
import company from './company';

// use merge here to avoid overriding
// ---- New import -----
export default merge(user, post, comment, like, auth, company);
```
