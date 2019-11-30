import { knex } from "./db";

const fields = ["id", "name", "type", "date"];

interface Event {
  id: number;
  name: string;
  type: string;
  date?: string;
}

export const all = () => {
  return knex.select().from<Event>("events");
};

export const create = async (input: Event): Promise<Event[]> => {
  const [createdEvent] = await knex("events")
    .returning(fields)
    .insert(input);

  return createdEvent;
};
