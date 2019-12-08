/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.alterTable("events", (table) => {
    table
      .integer("created_by")
      .unsigned()
      .notNullable();
    table
      .foreign("created_by")
      .references("id")
      .inTable("accounts");
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.alterTable("events", (table) => {
    table.dropColumns("created_by");
  });
}
