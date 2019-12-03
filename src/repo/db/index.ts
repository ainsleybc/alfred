import connect from "knex";
import config from "./knexfile";

// So we don't have to use magic strings everywhere we reference a table
export enum Table {
  event = "events",
  user = "users"
}

export const knex = connect(config[process.env.NODE_ENV || "development"]);
