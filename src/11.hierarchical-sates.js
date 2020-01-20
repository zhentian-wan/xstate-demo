const { Machine } = require("xstate");

const doorMachine = Machine({
  id: "door",
  initial: "locked",
  states: {
    unlocked: {
      initial: "closed",
      states: {
        open: {
          on: {
            CLOSED: "closed",
            LOCKED: "#lockedId"
          }
        },
        closed: {
          on: { OPEN: "open" }
        }
      }
    },
    locked: {
      id: "lockedId",
      on: { UNLOCKED: "unlocked" }
    }
  }
});
