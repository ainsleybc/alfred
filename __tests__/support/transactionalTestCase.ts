import { db, knex } from "./db";

beforeEach(async () => {
  await knex.raw("START TRANSACTION");
});

afterEach(async () => {
  await knex.raw("ROLLBACK");
  await db.disconnect();
});
