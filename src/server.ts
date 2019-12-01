import { ApolloServer, AuthenticationError } from "apollo-server";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import { getUser } from "./repo/user";

const context = ({ req }: ExpressContext) => {
  // this isn't actually wired up yet
  const token = req.headers.authorization || "";
  const user = getUser(token);

  if (!user) {
    throw new AuthenticationError("you must be logged in");
  }

  return { user };
};

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
});
