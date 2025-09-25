// ------------------------------
// Promise API Example: Promise.all
// ------------------------------

// Create Promise 1
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise1"); // resolves after 3 seconds
    }, 3000);
});

// Create Promise 2
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise2"); // resolves after 2 seconds
        // reject(new Error("OMG Error Comes")); // uncomment to test rejection
    }, 2000);
});

// Create Promise 3
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise3"); // resolves after 1 second
    }, 1000);
});


// ------------------------------
// Using Promise.all()
// ------------------------------
// - Takes an array of promises
// - Returns a new promise
// - Resolves ONLY when all input promises have resolved
// - Rejects immediately if ANY promise rejects
// - If successful, result is an array of all resolved values (in order!)
//   (order is preserved as [p1, p2, p3], not by timing)
// ------------------------------

let promiseAll = Promise.all([p1, p2, p3]);

promiseAll
    .then((value) => {
        // value is an array of results from p1, p2, p3
        console.log(value); // Example: ["Promise1", "Promise2", "Promise3"]
    })
    .catch((error) => {
        // If any promise rejects, this block will run
        console.log(error); // Example: Error: OMG Error Comes
    });
