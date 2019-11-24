import { gql } from "apollo-server";

export const typeDefs = gql`
  enum EventType {
    WEDDING
  }

  type Event {
    id: ID!
    type: EventType!
    name: String!
  }

  type Query {
    events: [Event]
  }

  type Mutation {
    createEvent: Event
  }
`;
