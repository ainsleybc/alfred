import { AuthenticationError } from "apollo-server";
import { user } from "./repo";
// import { ExpressContext } from "apollo-server-express/dist/ApolloServer";

export const context = (): object => {
  // export const context = ({ req }: ExpressContext) => {
  // this isn't actually wired up yet
  // const token = (req && req.headers.authorization) || "";
  const loggedInUser = user.get();

  if (!loggedInUser) {
    throw new AuthenticationError("you must be logged in");
  }

  return { user: loggedInUser };
};
