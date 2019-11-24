import { events, createEvent } from "./Event";

export const resolvers = {
  Query: {
    events
  },
  Mutation: {
    createEvent
  }
};
