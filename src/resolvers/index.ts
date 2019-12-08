import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { events, createEvent } from "./event";
import { account } from "./account";

const parseDate = (date: string): string => {
  return new Date(date).toISOString().split("T")[0];
};

export const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue: parseDate,
    serialize: (value): string => new Date(value).toISOString(),
    parseLiteral: (ast): string | null => {
      if (ast.kind === Kind.STRING) {
        return parseDate((ast.value as unknown) as string);
      }
      return null;
    },
  }),
  Query: {
    account,
  },
  Mutation: {
    createEvent,
  },
  Account: {
    events,
  },
};
