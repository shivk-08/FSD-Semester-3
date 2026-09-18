//Create a custom EventEmitter that triggers "greet" or "exit"
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {} // Create custom EventEmitter class

const myEmitter = new MyEmitter();

myEmitter.on("greet", (name) => { // Listen Greet Event
    console.log(`Hello, ${name}!`);
});

//exit event
myEmitter.on("exit", () => {
    console.log("Program is exiting...");
});

// Trigger events event
myEmitter.emit("greet", "Shiv");

// Trigger events exit
myEmitter.emit("exit");