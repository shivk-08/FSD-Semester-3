//Simulate DOM-like event handlingin Node.js using events
const EventEmitter = require("events");

// Create custom EventEmitter
const eventEmitter = new EventEmitter();

// Listen to greet event
eventEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// Exit event
eventEmitter.on("exit", () => {
    console.log("Program is exiting...");
});

eventEmitter.emit("greet", "Shiv");


eventEmitter.emit("exit");