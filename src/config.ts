import { config as dotenv } from "dotenv";

dotenv();

type Config = {
  env: string;
  server: {
    port: number;
    host: string;
  };
  auth0: {
    jwksUri: string;
    audience: string;
    issuer: string;
  };
  database: {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
  };
};

export const config: Config = {
  env: process.env.NODE_ENV || "development",
  server: {
    port: parseInt(process.env.SERVER_PORT || "4000"),
    host: process.env.SERVER_HOST || "localhost",
  },
  auth0: {
    jwksUri: process.env.AUTH0_JWKS_URI || "",
    audience: process.env.AUTH0_AUDIENCE || "",
    issuer: process.env.AUTH0_ISSUER || "",
  },
  database: {
    host: process.env.POSTGRES_HOST || "localhost",
    port: parseInt(process.env.POSTGRES_PORT || "5432"),
    user: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DB || "",
  },
};
