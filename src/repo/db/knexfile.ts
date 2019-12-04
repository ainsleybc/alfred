import { Config } from "knex";

const config: { [key: string]: Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 54327,
      user: "alfred",
      password: "alfred",
      database: "alfred",
    },
    migrations: {
      extension: "ts",
      stub: "migrations/migration.stub",
    },
    debug: true,
  },

  test: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 54327,
      user: "alfred",
      password: "alfred",
      database: "alfred_test",
    },
    pool: { min: 1, max: 1 },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "",
      user: "",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};

export = config;
