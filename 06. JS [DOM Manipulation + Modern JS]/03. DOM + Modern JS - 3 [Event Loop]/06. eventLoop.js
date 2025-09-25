// ------------------------------
// Event Loop Example in JavaScript
// ------------------------------

// The event loop is responsible for handling asynchronous operations
// like setTimeout, setInterval, promises, etc.
// It continuously checks the call stack and the event (callback) queue,
// and pushes callbacks to the call stack when it's free.

// In this example, we schedule 3 setTimeout callbacks
// with different delays: 5s, 3s, and 1s.

setTimeout(() => {
    console.log("This is the first message");  // Runs after 5 seconds
}, 5000);

setTimeout(() => {
    console.log("This is the second message"); // Runs after 3 seconds
}, 3000);

setTimeout(() => {
    console.log("This is the third message");  // Runs after 1 second
}, 1000);

// ------------------------------
// Expected Output (in order):
// ------------------------------
// After 1 second -> "This is the third message"
// After 3 seconds -> "This is the second message"
// After 5 seconds -> "This is the first message"
