// ------------------------------
// Promise API Example: Promise.race()
// ------------------------------

// The Promise.race() method returns a promise that settles (resolves or rejects) 
// as soon as one of the input promises settles. 
// Whichever promise completes first determines the result of the race.

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

// ------------------------------
// Using Promise.race()
// ------------------------------
// - Takes an array of promises
// - Returns the result of the FIRST promise that settles (fulfilled or rejected)
// - Ignores the other promises once the "winner" settles
// ------------------------------

let race = Promise.race([p1, p2, p3]);

race.then((value) => {
    console.log(value); 
    // Expected: "Promise3" (since p3 resolves first after 1 second)
}).catch((error) => {
    console.log(error); 
    // If the first settled promise is rejected, the race rejects immediately
});
