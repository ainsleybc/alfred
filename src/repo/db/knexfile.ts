import { Config } from "knex";

const config: { [key: string]: Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 54327,
      user: "alfred",
      password: "alfred",
      database: "alfred"
    },
    debug: true
  },

  test: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: 54327,
      user: "alfred",
      password: "alfred",
      database: "alfred_test"
    }
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
      extension: "ts"
    }
  }
};

export = config;
