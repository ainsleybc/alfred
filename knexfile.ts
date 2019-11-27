import { Config } from "knex";

const config: { [key: string]: Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      user: "alfred",
      password: "alfred",
      database: "alfred"
    },
    debug: true
  },

  production: {
    client: "postgresql",
    connection: {
      database: "",
      user: "",
      password: ""
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

export default config;
