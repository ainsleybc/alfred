import fs from "fs";
import { knex } from "../../src/repo/db";

const schemaFile = "./src/repo/db/structure.sql";

/*
 Postgres doesn't support CREATE/DROP TABLE IF EXISTS so
 this is a similar way of achieveing what we want
 */
const dropAndCreateSchema = async () => {
  await knex.raw("DROP SCHEMA IF EXISTS public CASCADE;");
  await knex.raw("CREATE SCHEMA public;");
  console.log("\nDatabase schema recreated successfully");
};

const db = {
  restore: async () => {
    await dropAndCreateSchema();
    await knex.raw(fs.readFileSync(schemaFile).toString());
    console.log(`Database restored from ${schemaFile}\n`);
  },

  clean: async () => {
    await dropAndCreateSchema();
  },

  disconnect: async () => {
    await knex.destroy();
    console.log("Disconnected from database\n");
  }
};

export { knex, db };
