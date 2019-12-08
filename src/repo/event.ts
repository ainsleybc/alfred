import { knex, Table } from "./db";
import { Event, Account } from "../models";

const fields = ["id", "name", "type", "date", "createdBy"];

type CreateInput = {
  name: string;
  type: string;
  date?: string;
};

const all = async (id: number): Promise<Event[]> => {
  return knex
    .where({ id })
    .select()
    .from<Event>(Table.event);
};

const create = async (input: CreateInput, account: Account): Promise<Event> => {
  const [createdEvent] = await knex(Table.event)
    .returning(fields)
    .insert({ ...input, createdBy: account.id });

  await knex(Table.eventsAccounts).insert({ eventId: createdEvent.id, accountId: account.id });

  return createdEvent;
};

export { create, all };
