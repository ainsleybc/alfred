import { AuthenticationError } from "apollo-server-core";
import { GraphQLFieldResolver } from "graphql";
import { Auth0Token } from "../models";
import * as repo from "../repo";

type AccountResolver = GraphQLFieldResolver<{}, { user: Auth0Token | undefined }>;
export const account: AccountResolver = async (_parent, _args, { user: user }) => {
  if (!user) throw new AuthenticationError("You must be logged in");
  return repo.account.get(user);
};
