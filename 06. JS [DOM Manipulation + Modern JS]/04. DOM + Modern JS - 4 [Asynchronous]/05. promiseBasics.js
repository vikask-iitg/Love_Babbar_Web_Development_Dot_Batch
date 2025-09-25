// ------------------------------
// Promise Basics Example
// ------------------------------

// Create a new Promise object
// - A Promise takes a function with two parameters: resolve and reject.
// - If the operation is successful, we call resolve(value).
// - If the operation fails, we call reject(error).

// IMPORTANT POINT TO REMEMBER -
// You don’t call a promise like a function.
// A promise starts running immediately when you create it with new Promise(...).

let promise = new Promise(function (resolve, reject) {
    resolve(200);  // immediately resolving with value 100
});

// Logs "Hello1" immediately (synchronous code runs first)
console.log("Hello1");

// Schedule a task using setTimeout (asynchronous)
// This callback will run after ~1000ms (1 second).
setTimeout(() => {
    console.log("Hello2");
}, 1000);

// Logs "Hello3" immediately after "Hello1"
console.log("Hello3");

// Print the promise object
// At this point, it is already resolved with value 100.
// So you will see: Promise { 100 }
console.log(promise);

// Print the type of the promise
// This will show: "object" (because Promise is a type of object in JS)
console.log(typeof promise);
