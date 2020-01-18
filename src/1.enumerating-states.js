/**
 *
 function lightBulb() {
  let isLit = false;
  let isBroken = false;

  return {
    state() {
      return { isLit, isBroken };
    },
    toggle() {
      if (isBroken) {
        isLit = false;
        return;
      }
      isLit = !isLit;
    },
    break() {
      isBroken = true;
      isLit = false;
    }
  };
}

const bulb = lightBulb();
const log = () => {
  console.log(bulb.state());
};

bulb.toggle();
bulb.break();
log(); // { isLit: false, isBroken: true }
 */

const STATE = {
  LIT: "lit",
  UNLIT: "unlit",
  BROKEN: "broken"
};

function lightBulb() {
  let state = STATE.UNLIT;

  return {
    state() {
      return state;
    },
    toggle() {
      switch (state) {
        case STATE.LIT:
          state = STATE.UNLIT;
          break;
        case STATE.UNLIT:
          state = STATE.LIT;
          this.break;
      }
    },
    break() {
      state = STATE.BROKEN;
    }
  };
}

const bulb = lightBulb();
const log = () => {
  console.log(bulb.state());
};

bulb.toggle();
bulb.break();
log(); // broken
