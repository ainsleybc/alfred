import connect from "knex";
import stringCase from "knex-stringcase";
import knexConfig from "./knexfile";
import { config } from "../../config";

// So we don't have to use magic strings everywhere we reference a table
export enum Table {
  event = "events",
  account = "accounts",
  eventsAccounts = "events_accounts",
}

// Use knex-stringcase so we can use camelCase in code and snake_case in db because postgres
export const knex = connect(stringCase(knexConfig[config.env || "development"]));
