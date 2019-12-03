import { gql } from "apollo-server";
import { query } from "./support/mockClient";
import { insert } from "./factories";

import("./support/transactionalTestCase");

describe("events", () => {
  it("returns a list of events", async () => {
    const eventsQuery = gql`
      query events {
        events {
          id
          name
          date
          type
        }
      }
    `;

    const event = { name: "foo", type: "WEDDING", date: null };
    const eventId = await insert("event", event);

    const res = await query({ query: eventsQuery });

    expect(res.data?.events).toEqual([{ ...event, id: eventId.toString() }]);
  });
});
