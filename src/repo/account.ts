import { Account, Auth0Token } from "../models";
import { knex, Table } from "./db";
import { pick } from "lodash";

const fields = ["id", "auth0Id", "name", "email", "emailVerified"];
const upsertOnFields = ["name", "email", "emailVerified"];

const upsert = async (account: Auth0Token): Promise<Account[]> => {
  const [{ id }] = await knex
    .where({ auth0Id: account.auth0Id })
    .select("id")
    .from<Account>(Table.account);

  if (id) {
    return await knex(Table.account)
      .where({ id })
      .update(pick(account, upsertOnFields))
      .returning(fields);
  }

  return await knex(Table.account)
    .returning(fields)
    .insert(account);
};

const get = async (token: Auth0Token): Promise<Account> => {
  const [account] = await upsert(token);
  return account;
};

export { get };
