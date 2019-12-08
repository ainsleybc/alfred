import { gql } from "apollo-server-express";

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
    account: Account
  }

  input CreateEventInput {
    name: String
    type: EventType
    date: Date
  }

  type Mutation {
    createEvent(input: CreateEventInput): Event
  }

  type Account {
    id: ID!
    name: String
    email: String
    events: [Event]
  }
`;
