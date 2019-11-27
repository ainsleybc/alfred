import { events, createEvent } from "./event";

export const resolvers = {
  Query: {
    events
  },
  Mutation: {
    createEvent
  }
};
