import { db } from "../models/db";

export const all = () => db.select().from<Event>("events");
