import { db } from "../models/db";

const fields = ["id", "name", "type", "date"];

interface Event {
  id: number;
  name: string;
  type: string;
  date?: string;
}

export const all = () => {
  return db.select().from<Event>("events");
};

export const create = async (input: Event): Promise<Event[]> => {
  const [createdEvent] = await db("events")
    .returning(fields)
    .insert(input);

  return createdEvent;
};
