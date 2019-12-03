import { db } from "./db";

const tearDown = async () => {
  await db.clean();
  await db.disconnect();
};

export = tearDown;
