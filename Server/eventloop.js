//Visualize the event loop using setTimeout, setImmediate, and process.nextTick

console.log("1. Program Strated");

process.nextTick(() => {
    console.log("2. process.nextTick()"); // Execute jusst after the current operation
});

setTimeout(( )=> {
    console.log("3. setTimeout()"); // Execute after Specified times
}, 100);

setImmediate(( )=> {
    console.log("4. setImmediate()"); // Execute in check phase of event loop
});

console.log("5. Program Ended");


