import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { events, createEvent } from "./event";

const parseDate = (date: string) => new Date(date).toISOString().split("T")[0];

export const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue: parseDate,
    serialize: value => new Date(value),
    parseLiteral: ast => {
      if (ast.kind === Kind.STRING) {
        return parseDate((ast.value as unknown) as string);
      }
      return null;
    }
  }),
  Query: {
    events
  },
  Mutation: {
    createEvent
  }
};
