import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable("events", t => {
    t.comment("An event (wedding, birthday party)");
    t.increments("id")
      .unsigned()
      .primary();
    t.string("name").notNullable();
    t.enu("type", ["WEDDING"], {
      useNative: true,
      enumName: "event_type"
    }).notNullable();
    t.date("date");
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists("events");
}
