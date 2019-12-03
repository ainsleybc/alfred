import { AuthenticationError } from "apollo-server";
import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

import { getUser } from "./repo/user";

export const context = ({ req }: ExpressContext) => {
  // this isn't actually wired up yet
  const token = (req && req.headers.authorization) || "";
  const user = getUser(token);

  if (!user) {
    throw new AuthenticationError("you must be logged in");
  }

  return { user };
};
