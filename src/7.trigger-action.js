const { Machine, interpret, send } = require("xstate");

const echoMachine = Machine({
  id: "echo",
  initial: "listening",
  states: {
    listening: {
      on: {
        SPEAK: {
          actions: send("ECHO") // trigger echo action
        },
        ECHO: {
          actions: () => {
            console.log("echo is called");
          }
        }
      }
    }
  }
});

const service = interpret(echoMachine).start();
service.send("SPEAK"); //echo is called
