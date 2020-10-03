import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { typeDefs } from '../typeDefs';
import { resolvers } from '../resolvers';
import { ApolloServer } from 'apollo-server-express';

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });
  //   await mongoose.connect('mongodb://localhost:27017/test', {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //   });
  app.listen({ port: 4000 }, () =>
    console.log(`Server is ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
