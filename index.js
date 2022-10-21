require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

import compression from 'compression';
import cookieParser from 'cookie-parser';
import depthLimit from 'graphql-depth-limit';
import { GraphQLServer, PubSub } from 'graphql-yoga';
import helmet from 'helmet';
import passport from 'passport';
import db from './db';
import createLoaders from './loaders';
import resolvers from './resolvers';
import typeDefs from './types';
import { initUser } from './utils';
import vocabWorker from './worker/vocabImage.worker'

const dev = process.env.NODE_ENV !== 'production';

const startServer = async () => {
  const initDB = await db();

  const pubsub = new PubSub();

  const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: async req => ({
      ...req,
      pubsub,
      loaders: createLoaders(),
      user: initUser(req),
      db: initDB
    }),
    validationRules: [depthLimit(10)]
  });
  vocabWorker({
    db: initDB
  });

  server.express.use(compression());
  server.express.use(helmet());
  server.express.use(cookieParser());

  const ONE_YEAR = 31556952000;

  if (!dev) {
    server.express.set('trust proxy', 1);
  }

  server.express.use(passport.initialize());

  //todo
  //initGoogleAuth(server.express)

  console.log('node_env:', process.env.NODE_ENV);
  console.log('client_url:', process.env.CLIENT_URL);
  const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true
  };

  //option object for graphql yoga
  const port = parseInt(process.env.PORT, 10) || 4000;
  const options = {
    port,
    cors: corsOptions
  };

  server.start(options, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests. [${process.env.NODE_ENV}]`
    )
  );
};

startServer();
