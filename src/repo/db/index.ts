import connect from "knex";
import config from "./knexfile";

export const knex = connect(config[process.env.NODE_ENV || "development"]);
