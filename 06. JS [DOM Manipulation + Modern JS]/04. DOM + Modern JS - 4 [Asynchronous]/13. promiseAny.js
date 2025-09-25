// ------------------------------
// Promise API Example: Promise.any()
// ------------------------------

// The Promise.any() method takes an array of promises and:
// - Resolves as soon as the FIRST promise resolves successfully.
// - Ignores rejected promises until one resolves.
// - If ALL promises reject, it rejects with an AggregateError.

// ------------------------------
// Create Promises
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
// Using Promise.any()
// ------------------------------
// - Returns the first successfully resolved promise.
// - In this case, p2 resolves the fastest (after 1 second).
// - So Promise.any() resolves with "Promise2".
// ------------------------------

let promiseAny = Promise.any([p1, p2, p3])
    .then((value) => {
        console.log("Promise.any resolved with:", value);
        // Expected output: "Promise.any resolved with: Promise2"
    })
    .catch((error) => {
        console.log("Promise.any rejected with:", error);
        // Happens only if ALL promises reject → AggregateError
    });
