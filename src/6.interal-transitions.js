const { Machine } = require("xstate");

const idleMachine = Machine(
  {
    id: "idle",
    initial: "idle",
    states: {
      idle: {
        entry: ["logEntry"],
        exit: ["logExit"]
      }
    },
    on: {
      DO_NOTHING: ".idle" // add '.' to point it to itself, without call exit and entry actions
    }
  },
  {
    actions: {
      logEntry: () => {
        console.log("entered");
      },
      logExit: () => {
        console.log("exited");
      }
    }
  }
);
