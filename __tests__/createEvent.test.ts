import { gql } from "apollo-server";
import { mutate } from "./support/mockClient";

import("./support/transactionalTestCase");

describe("createEvent", () => {
  it("creates a new event", async () => {
    const mutation = gql`
      mutation createEvent($input: CreateEventInput) {
        createEvent(input: $input) {
          id
          name
          date
          type
        }
      }
    `;

    const input = {
      name: "foo",
      type: "WEDDING",
      date: "2019-12-25",
    };

    const res = await mutate({ mutation, variables: { input } });
    const createdEvent = res.data?.createEvent;

    expect(createdEvent.date).toEqual("2019-12-25T00:00:00.000Z");
    expect(createdEvent.name).toEqual("foo");
    expect(createdEvent.type).toEqual("WEDDING");
  });
});
