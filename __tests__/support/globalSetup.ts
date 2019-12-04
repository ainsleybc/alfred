import { db } from "./db";

const setup = (): Promise<void> => {
  return db.restore();
};

export = setup;
