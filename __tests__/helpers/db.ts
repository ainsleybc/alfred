import fs from "fs";
import { knex } from "../../src/repo/db";

const schemaFile = "./src/repo/db/structure.sql";

import connect from "knex";
import config from "../../src/repo/db/knexfile";

const knex = connect(config["test"]);

export const db = {
  knex,
  restore: async () => {
    await knex.raw("DROP SCHEMA IF EXISTS public CASCADE;");
    await knex.raw("CREATE SCHEMA public;");
    await knex.raw(fs.readFileSync(schemaFile).toString());
    console.log(`\n\nDatabase restored from ${schemaFile}\n`);
  },

  clean: async () => {
    await knex.raw("DROP SCHEMA IF EXISTS public CASCADE;");
    console.log("\nDropped database schema\n");
  },

  disconnect: async () => {
    await knex.destroy();
    console.log("\nDisconnected from database\n");
  }
};
