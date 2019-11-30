const config = require("../jest.config");

module.exports = {
  ...config,
  globalSetup: "./helpers/setup.ts",
  globalTeardown: "./helpers/teardown.ts",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"]
};
