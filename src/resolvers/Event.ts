const fakeEvents = [
  {
    id: 3,
    type: "WEDDING",
    name: "First Wedding"
  },
  {
    id: 4,
    type: "WEDDING",
    name: "Second Wedding"
  }
];

const events = () => fakeEvents;

const createEvent = () => fakeEvents[0];

export { events, createEvent };
