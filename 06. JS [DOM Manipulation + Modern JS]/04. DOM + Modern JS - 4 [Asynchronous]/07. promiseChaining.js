// ------------------------------
// Promise Chaining Example
// ------------------------------

// First Promise
let p1 = new Promise((resolve, reject) => {
    // Asynchronous action: log after 2 seconds
    setTimeout(() => {
        console.log("Resolved after 2 seconds");
        resolve(200); // <-- this will never run (see note below)
    }, 2000);

    // Immediately resolve (takes priority, so promise settles instantly)
    resolve("Promise1 resolved");
});

// Chain the first .then()
let output = p1.then((value) => {
    // This runs when p1 resolves
    console.log(value); // logs: "Promise1 resolved" returned by p1, stored in value

    // Create another promise (p2) inside the .then()
    let p2 = new Promise((resolve, reject) => {
        // Asynchronous action: log after 5 seconds
        setTimeout(() => {
            console.log("Resolved after 5 seconds");
        }, 5000);

        // Immediately resolve
        resolve("Promise2 resolved");
    });

    // Return p2 so the chaining continues
    return p2;
});

// Handle the chained promise
output.then((value) => console.log(value));
