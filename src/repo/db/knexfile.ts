import { Config } from "knex";
import { config as globalConfig } from "../../config";

const config: { [key: string]: Config } = {
  development: {
    client: "postgresql",
    connection: globalConfig.database,
    migrations: {
      extension: "ts",
      stub: "migrations/migration.stub",
    },
    debug: true,
  },

  test: {
    client: "postgresql",
    connection: globalConfig.database,
    pool: { min: 1, max: 1 },
  },

  production: {
    client: "postgresql",
    connection: globalConfig.database,
    pool: { min: 2, max: 10 },
  },
};

export = config;
