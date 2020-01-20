const { Machine } = require("xstate");

const stopLightMachine = Machine(
  {
    id: "stopLight",
    initial: "red",
    context: {
      rushHourMultiplier: 1
    },
    states: {
      red: {
        after: { RED_TIMER: "yellow" }
      },
      yellow: {
        after: { YELLOW_TIMER: "green" }
      },
      green: {
        after: { GREEN_TIMER: "red" }
      }
    }
  },
  {
    delays: {
      RED_TIMER: context => context.rushHourMultiplier * 4000,
      YELLOW_TIMER: context => context.rushHourMultiplier * 1000,
      GREEN_TIMER: context => context.rushHourMultiplier * 3000
    }
  }
);
