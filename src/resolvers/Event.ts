import { event } from "../models";

export const events = () => event.all();

export const createEvent = (_parent: any, { input }: any) => {
  return event.create(input);
};
