import { ApolloServer } from 'apollo-server-express';
import { ENV } from '../config/environment';
import schema from './schema';

const apolloServer = new ApolloServer({
  schema,
  playground: ENV.development,
});

export default apolloServer;