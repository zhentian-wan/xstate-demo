const { Machine, interpret } = require("xstate");

const alarmMachine = Machine(
  {
    id: "alramMachine",
    initial: "idle",
    states: {
      idle: {
        on: {
          BEEP: "beep"
        }
      },
      beep: {
        on: {
          IDLE: "idle"
        },
        activities: ["keepBeeping"]
      }
    }
  },
  {
    activities: {
      keepBeeping: (context, event) => {
        const beep = () => {
          console.log("beepping....");
        };

        beep();
        const handler = setInterval(beep, 1000);
        return () => clearInterval(handler);
      }
    }
  }
);

const service = interpret(alarmMachine)
  .onTransition(s => {
    console.log(s.value);
  })
  .start();

service.send("BEEP");
setTimeout(() => {
  service.send("IDLE");
}, 5000);
