const { Machine } = require("xstate");

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

console.log(lightBulb.transition("broken", "TOGGLE").value); // broken
console.log(lightBulb.transition("lit", "TOGGLE").value); // unlit
console.log(lightBulb.transition("unlit", "TOGGLE").value); // lit
