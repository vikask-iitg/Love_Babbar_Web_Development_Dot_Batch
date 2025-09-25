// ------------------------------
// Event Loop Example #2
// ------------------------------

// This shows how synchronous and asynchronous code run together
// in JavaScript's event loop model.

console.log("Hello");  // (1) Runs immediately - synchronous

setTimeout(() => {
    console.log("Inside function");  // (3) Runs after 5 seconds (async)
}, 5000);

console.log("Hi");     // (2) Runs immediately - synchronous
