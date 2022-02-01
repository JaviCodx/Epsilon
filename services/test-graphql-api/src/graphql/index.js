import { ApolloServer } from 'apollo-server-express';


const apolloServer = new ApolloServer({
  // Schema pending...
  playground: true,
});

export default apolloServer;