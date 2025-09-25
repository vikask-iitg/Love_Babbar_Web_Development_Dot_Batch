// ------------------------------
// Asynchronous Execution in JavaScript
// ------------------------------

// Functions that run independently (in parallel) without blocking
// the main program flow are called asynchronous.
// A good example is JavaScript's setTimeout().
// The event loop ensures these async callbacks run only 
// after their timers expire and the call stack is clear.

let num1 = 10;
let num2 = 20;

// ------------------------------
// Async Task #1
// ------------------------------
// After 2 seconds, this callback runs and logs num1 and num2
setTimeout(() => {
    console.log(num1, num2);
}, 2000);

// ------------------------------
// Async Task #2
// ------------------------------
// After 5 seconds, this callback runs and logs the sum
setTimeout(() => {
    console.log("Sum:", num1 + num2);
}, 5000);

// ------------------------------
// Synchronous Task
// ------------------------------
console.log("Hello world: ");  // Runs immediately before timeouts finish
