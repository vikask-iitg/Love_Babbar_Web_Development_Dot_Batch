// ------------------------------
// Promise API Example: Promise.resolve
// ------------------------------

// The Promise.resolve() method:
// - Returns a Promise object that is resolved with the given value.
// - If the value is already a promise, it is returned as-is.
// - Useful for wrapping values in a promise for consistency in async code.

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
        // resolve("Promise2");
        reject(new Error("OMG Error Comes")); // uncomment to test rejection
    }, 1000);
});

// Promise 3 → resolves after 4 seconds
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3");
    }, 4000);
});

// ------------------------------
// Using Promise.resolve()
// ------------------------------
// - Here, we are passing an array [p1, p2, p3] to Promise.resolve.
// - This does NOT wait for them to resolve like Promise.all or Promise.any.
// - Instead, it simply wraps the array into a resolved promise immediately.
// ------------------------------

let promiseResolve = Promise.resolve([p1, p2, p3])
    .then((value) => {
        console.log("Promise.resolve resolved with:", value);
        // Expected output: [Promise, Promise, Promise]
        // (an array of pending promises, not their results!)
    })
    .catch((error) => {
        console.log("Promise.resolve rejected with:", error);
    });
