import { ApolloServer, ApolloServerExpressConfig } from "apollo-server-express";
import { createTestClient, ApolloServerTestClient } from "apollo-server-testing";

import { resolvers } from "../../src/resolvers";
import { typeDefs } from "../../src/schema";

export const mockClient = (opts: ApolloServerExpressConfig = {}): ApolloServerTestClient => {
  const testServer = new ApolloServer({
    typeDefs,
    resolvers,
    ...opts,
  });

  return createTestClient(testServer);
};
