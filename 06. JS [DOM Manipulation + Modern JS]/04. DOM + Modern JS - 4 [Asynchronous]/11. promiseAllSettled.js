// ------------------------------
// Promise API Example: Promise.allSettled
// ------------------------------

// ------------------------------
// Using Promise.allSettled()
// ------------------------------
// - Takes an array of promises
// - Returns a promise that ALWAYS resolves (never rejects)
// - Waits for ALL promises to settle (either resolve or reject)
// - Result is an array of objects with:
//   { status: "fulfilled", value: result }
//   { status: "rejected", reason: error }
// ------------------------------

// ------------------------------
// Create Promises
// ------------------------------

// Promise 1 → resolves after 3 seconds
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1");
    }, 3000);
});

// Promise 2 → resolves after 2 seconds
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2");
        // reject(new Error("OMG Error Comes")); // uncomment to test rejection
    }, 2000);
});

// Promise 3 → resolves after 1 second
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3");
    }, 1000);
});


let promiseSettled = Promise.allSettled([p1, p2, p3]);

promiseSettled.then((value) => {
    console.log(value);
});
