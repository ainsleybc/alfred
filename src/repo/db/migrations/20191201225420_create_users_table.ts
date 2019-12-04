/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable("users", (table) => {
    table.comment("A user");
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

  await knex.schema.createTable("events_users", (table) => {
    table
      .increments("id")
      .unsigned()
      .primary();
    table
      .integer("event_id")
      .unsigned()
      .references("events.id");
    table
      .integer("user_id")
      .unsigned()
      .references("users.id");

    table.timestamps(false);

    table.index("event_id");
    table.index("user_id");
    table.unique(["event_id", "user_id"]);
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
  await knex.schema.dropTableIfExists("events_users");
  await knex.schema.dropTableIfExists("users");
  await knex.schema.table("events", (table) => {
    table.dropTimestamps();
  });
}
