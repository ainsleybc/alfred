import fs from "fs";
import { knex } from "../../src/repo/db";

const schemaFile = "./src/repo/db/structure.sql";

/*
 Postgres doesn't support CREATE/DROP TABLE IF EXISTS so
 this is a similar way of achieveing what we want
 */
const dropAndCreateSchema = async (): Promise<void> => {
  await knex.raw("DROP SCHEMA IF EXISTS public CASCADE;");
  await knex.raw("CREATE SCHEMA public;");
};

const db = {
  restore: async (): Promise<void> => {
    await dropAndCreateSchema();
    await knex.raw(fs.readFileSync(schemaFile).toString());
    console.log(`\nDatabase restored from ${schemaFile}\n`);
  },

  clean: async (): Promise<void> => dropAndCreateSchema(),

  disconnect: async (): Promise<void> => knex.destroy(),
};

export { knex, db };
