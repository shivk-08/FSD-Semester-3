console.log("1. Synchronous code before callbacks");

process.nextTick(() => {
    console.log("2. process.nextTick()");
});

setTimeout(() => {
    console.log("3. setTimeout(0)");
}, 0);

setImmediate(() => {
    console.log("4. setImmediate()");
});

console.log("5. Synchronous code after callbacks");