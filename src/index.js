import express from 'express';
// import bodyParser from 'body-parser';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'hi!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server is ready at http://localhost:4000${server.graphqlPath}`)
);
