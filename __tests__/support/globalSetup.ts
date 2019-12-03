import { db } from "./db";

const setup = async () => {
  await db.restore();
};

export = setup;
