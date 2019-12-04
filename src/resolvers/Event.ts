import {} from "apollo-server";
import { event } from "../repo";

export const events = (): Promise<event.Event[]> => {
  return event.all();
};

export const createEvent = (
  _parent: {},
  { input }: { input: event.Event },
): Promise<event.Event> => {
  return event.create(input);
};
