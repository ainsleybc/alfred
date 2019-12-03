const config = require("../jest.config");

module.exports = {
  ...config,
  globalSetup: "./support/globalSetup.ts",
  globalTeardown: "./support/globalTeardown.ts",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"]
};
