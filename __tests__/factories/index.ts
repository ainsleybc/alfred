import * as event from "./event";

export type Insert = (args: object) => Promise<number[]>;

interface Factory {
  [key: string]: {
    insert: Insert;
  };
}

const factory: Factory = {
  event
};

export const insert = (table: string, args: object) =>
  factory[table].insert(args);
