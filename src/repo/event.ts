import { knex, Table } from "./db";

const fields = ["id", "name", "type", "date"];

export type Event = {
  id: number;
  name: string;
  type: string;
  date?: string;
};

export const all = async (): Promise<Event[]> => {
  return knex.select().from<Event>(Table.event);
};

export const create = async (input: Event): Promise<Event> => {
  const [createdEvent] = await knex(Table.event)
    .returning(fields)
    .insert(input);

  return createdEvent;
};
