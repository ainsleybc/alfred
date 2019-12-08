/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.alterTable("accounts", (table) => {
    table.text("name").notNullable();
    table
      .boolean("email_verified")
      .defaultTo(false)
      .notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.alterTable("accounts", (table) => {
    table.dropColumns("name", "email_verified");
  });
}
