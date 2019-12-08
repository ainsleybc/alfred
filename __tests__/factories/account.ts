import { knex, Table } from "../../src/repo/db";
import { Insert } from "./index";

export const insert: Insert = async (args) => {
  const input = {
    name: "john",
    email: "john@wick.com",
    emailVerified: false,
    auth0Id: "auth0|5de83f3760b3850e65adbc02",
    ...args,
  };

  const [account] = await knex(Table.account)
    .returning(Object.keys(input).concat(["id"]))
    .insert(input);

  return account;
};
