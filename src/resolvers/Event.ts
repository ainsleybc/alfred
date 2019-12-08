import { GraphQLFieldResolver } from "graphql";
import { AuthenticationError } from "apollo-server-core";
import { Event, Account } from "../models";
import * as repo from "../repo";

type EventsResolver = GraphQLFieldResolver<Account, {}>;
export const events: EventsResolver = ({ id }) => {
  return repo.event.all(id);
};

type CreateEventArgs = { input: { name: string; type: string; date?: string } };
type CreateEventResolver = GraphQLFieldResolver<{}, { user: Account }, CreateEventArgs>;
export const createEvent: CreateEventResolver = async (_parent, { input }, { user }): Promise<Event> => {
  if (!user) throw new AuthenticationError("You must be logged in");
  const account = await repo.account.get(user);
  return repo.event.create(input, account);
};
