/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable("accounts", (table) => {
    table.comment("A user account");
    table
      .increments("id")
      .unsigned()
      .primary();
    table.text("auth0_id").notNullable();
    table.text("email").notNullable();
    table.timestamps(false);

    table.unique(["email"]);
    table.unique(["auth0_id"]);
  });

  await knex.schema.createTable("events_accounts", (table) => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("event_id")
      .unsigned()
      .references("events.id");
    table
      .integer("account_id")
      .unsigned()
      .references("accounts.id");

    table.timestamps(false);

    table.index("event_id");
    table.index("account_id");
    table.unique(["event_id", "account_id"]);
  });

  await knex.schema.alterTable("events", (table) => {
    table.timestamps(false);
    // text is better than string (char)
    table
      .text("name")
      .notNullable()
      .alter();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists("events_accounts");
  await knex.schema.dropTableIfExists("accounts");
  await knex.schema.table("events", (table) => {
    table.dropTimestamps();
  });
}
