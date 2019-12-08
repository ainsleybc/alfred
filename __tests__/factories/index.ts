import * as event from "./event";
import * as account from "./account";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Insert = (args?: any) => Promise<object>;

interface Factory {
  [key: string]: {
    insert: Insert;
  };
}

const factory: Factory = {
  event,
  account,
};

export function insert<T>(table: string, args?: object): Promise<T> {
  return (factory[table].insert(args) as unknown) as Promise<T>;
}
