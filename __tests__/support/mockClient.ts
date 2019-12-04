import { ApolloServer } from "apollo-server";
import { createTestClient } from "apollo-server-testing";

import { resolvers } from "../../src/resolvers";
import { typeDefs } from "../../src/schema";
import { context } from "../../src/context";

const testServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

const { mutate, query } = createTestClient(testServer);

export { mutate, query };
