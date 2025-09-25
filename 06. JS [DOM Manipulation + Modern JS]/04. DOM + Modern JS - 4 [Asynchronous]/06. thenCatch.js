// ------------------------------
// Promise .then() and .catch() Example
// ------------------------------

// Promise 1
let promise1 = new Promise((resolve, reject) => {
    // Asynchronous action: log after 5 seconds
    setTimeout(() => console.log("From Promise 1"), 5000);

    // Immediately resolve with value 200
    resolve(200);
});

// console.log(promise1);

// Handling promise1 right after declaration
promise1.then((value) => console.log(value));


// Promise 2
let promise2 = new Promise((resolve, reject) => {
    // Asynchronous action: log after 5 seconds
    setTimeout(() => console.log("From Promise 2"), 5000);

    // Immediately reject with an Error
    reject(new Error("Error while trying to resolve"));
});

// Handling promise2 right after declaration
promise2.catch((error) => console.log(error));

// Output
// 200
// Error: Error while trying to resolve
// From Promise 1
// From Promise 2
