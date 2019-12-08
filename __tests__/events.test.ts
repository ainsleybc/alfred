import { gql } from "apollo-server-express";
import { mockClient } from "./support/mockClient";
import { insert } from "./factories";
import { Account, Event } from "../src/models";

import("./support/transactionalTestCase");

describe("events", () => {
  it("returns a list of events", async () => {
    const eventsQuery = gql`
      query events {
        account {
          events {
            id
            name
            date
            type
          }
        }
      }
    `;

    const account = await insert<Account>("account");
    const event = await insert<Event>("event", {
      name: "foo",
      type: "WEDDING",
      date: "2019-10-13",
      account,
    });

    const { query } = mockClient({ context: () => ({ user: account }) });
    const res = await query({ query: eventsQuery });
    const [{ id, name, date, type }] = res.data?.account.events;

    expect(id).toEqual(event.id.toString());
    expect(name).toEqual(event.name);
    expect(new Date(date)).toEqual(event.date);
    expect(type).toEqual(event.type);
  });
});
