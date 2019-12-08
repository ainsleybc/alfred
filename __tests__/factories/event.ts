import { knex, Table } from "../../src/repo/db";
import { Insert } from "./index";

export const insert: Insert = async ({ account, ...rest }) => {
  const input = {
    name: "Boris Johnson & Nigel Farage",
    type: "WEDDING",
    date: "2019-10-31",
    createdBy: account.id,
    ...rest,
  };

  const [event] = await knex(Table.event)
    .returning(Object.keys(input).concat(["id"]))
    .insert(input);

  await knex(Table.eventsAccounts).insert({ eventId: event.id, accountId: account.id });

  return event;
};
