import { db } from "./db";

const tearDown = async () => {
  await db.clean();
  await db.disconnect();
  console.log("Disconnected from database successfully\n");
};

export = tearDown;
