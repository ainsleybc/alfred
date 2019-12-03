import { knex, Table } from "../../src/repo/db";
import { Insert } from "./index";

export const insert: Insert = async args => {
  const [id] = await knex(Table.event)
    .returning("id")
    .insert({
      name: "Boris Johnson & Nigel Farage",
      type: "WEDDING",
      date: "2019-10-31",
      ...args
    });

  return id;
};
