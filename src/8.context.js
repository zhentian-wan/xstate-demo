const { Machine, interpret, assign } = require("xstate");

const inputMachine = Machine(
  {
    id: "inputMachine",
    initial: "input",
    context: {
      value: "Please enter a color"
    },
    states: {
      input: {
        on: {
          CHANGE_VALUE: {
            actions: ["changeInput"]
          }
        }
      }
    }
  },
  {
    actions: {
      changeInput: assign((context, event) => {
        return { value: event.color };
      })
    }
  }
);

const service = interpret(inputMachine)
  .onTransition(state => {
    console.log(state.context); // red
  })
  .start();
service.send({ type: "CHANGE_VALUE", color: "red" });
