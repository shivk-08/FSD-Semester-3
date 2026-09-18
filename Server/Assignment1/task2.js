const EventEmitter = require("events");

const application = new EventEmitter();

// Input event
application.on("input", (text) => {
    console.log(`Entered text: ${text}`);
});

// Button click event
application.on("buttonClick", (buttonName) => {
    console.log(`${buttonName} button was clicked.`);
});

// Form submit event
application.on("formSubmit", () => {
    console.log("Form submitted successfully.");
});

// Challenge: Notification event
application.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Trigger all events
application.emit("input", "Hello Node.js");
application.emit("buttonClick", "Submit");
application.emit("formSubmit");
application.emit("notification", "You have a new message.");