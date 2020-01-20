const { Machine, assign } = require("xstate");

const tryAgainMachine = Machine(
  {
    id: "tryAgain",
    initial: "idle",
    context: {
      tries: 0
    },
    states: {
      idle: {
        on: {
          TRY: "trying"
        }
      },
      trying: {
        // inc tries every time entry trying state
        entry: ["incTries"],
        on: {
          // null state, enter by default
          "": [
            // conditional branching
            {
              target: "success",
              cond: "triedEnough"
            },
            {
              target: "idle"
            }
          ]
        }
      },
      success: {}
    }
  },
  {
    actions: {
      incTries: assign({
        tries: ctx => ctx.tries + 1
      })
    },
    guards: {
      triedEnough: context => context.tries >= 2
    }
  }
);
