import { GraphQLFieldResolver } from "graphql";
import { event } from "../repo";

type CreateEventArgs = {
  input: { name: string; type: string; date?: string };
};

export const events: GraphQLFieldResolver<{}, {}> = (): Promise<event.Event[]> => {
  return event.all();
};

export const createEvent: GraphQLFieldResolver<{}, {}, CreateEventArgs> = (
  _parent,
  { input },
): Promise<event.Event> => {
  return event.create(input);
};
