const EventEmitter = require("events");

const studentTracker = new EventEmitter();

// Login event
studentTracker.on("login", (studentName) => {
    console.log(`${studentName} logged in successfully.`);
});

// Course registration event
studentTracker.on("courseRegistration", (courseName) => {
    console.log(`Course registered: ${courseName}`);
});

// Notification event
studentTracker.on("notification", (message) => {
    console.log(`Notification: ${message}`);
});

// Logout event
studentTracker.on("logout", (studentName) => {
    console.log(`${studentName} logged out successfully.`);
});

// Trigger events
studentTracker.emit("login", "Rahul");

studentTracker.emit("courseRegistration", "Full Stack Development");

studentTracker.emit("notification", "Course registration completed successfully.");

studentTracker.emit("logout", "Rahul");