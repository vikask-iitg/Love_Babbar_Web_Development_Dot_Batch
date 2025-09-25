// ------------------------------
// Promise API Example: Promise.reject
// ------------------------------

// The Promise.reject() method:
// - Returns a Promise object that is REJECTED with the given reason.
// - Unlike Promise.resolve(), this ALWAYS creates a rejected promise.
// - Useful for testing error handling in async code or creating
//   a rejected promise on demand.

// ------------------------------
// Create Promises (just for demo)
// ------------------------------

// Promise 1 → resolves after 3 seconds
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1");
    }, 3000);
});

// Promise 2 → resolves after 1 second
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2");
        // reject(new Error("OMG Error Comes")); // uncomment to test rejection
    }, 1000);
});

// Promise 3 → resolves after 4 seconds
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3");
    }, 4000);
});

// ------------------------------
// Using Promise.reject()
// ------------------------------
// - Here, we are passing an array [p1, p2, p3] to Promise.reject.
// - This does NOT wait for them or inspect them.
// - It immediately creates a rejected promise with the array as the "reason".
// ------------------------------

let promiseReject = Promise.reject([p1, p2, p3])
    .then((value) => {
        console.log("Promise.reject resolved with:", value);
    })
    .catch((error) => {
        console.log("Promise.reject rejected with:", error);
        // Expected output: [Promise, Promise, Promise]
        // (the same array, but given as the rejection reason)
    });
