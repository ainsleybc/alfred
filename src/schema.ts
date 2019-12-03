import { gql } from "apollo-server";

export const typeDefs = gql`
  scalar Date

  enum EventType {
    WEDDING
  }

  type Event {
    id: ID!
    type: EventType!
    name: String!
    date: Date
  }

  type Query {
    events: [Event]
  }

  input CreateEventInput {
    name: String
    type: EventType
    date: Date
  }

  type Mutation {
    createEvent(input: CreateEventInput): Event
  }
`;
