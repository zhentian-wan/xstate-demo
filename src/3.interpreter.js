const { Machine, interpret } = require("xstate");

const lit = {
  // 'on' keyword present events
  on: {
    TOGGLE: "unlit",
    BROKEN: "broken"
  }
};
const unlit = {
  on: {
    TOGGLE: "lit",
    BROKEN: "broken"
  }
};
const broken = {
  // you can leave it empty, the same as final state
  //type: "final"
};

const states = { lit, unlit, broken };

const lightBulb = Machine({
  id: "lightBulb",
  initial: "unlit",
  strict: true,
  states
});

const service = interpret(lightBulb)
  .onTransition(state => {
    // Side effect
    if (state.value === "broken") {
      console.log("Light bulb is borken");
      service.stop();
    }

    // check the state is changed or not
    if (state.changed) {
      console.log("changed to: ", state.value);
    }
  })
  .start(); // unlit when start

service.send("TOGGLE"); // lit after toggle

service.send("BROKEN"); // borken
