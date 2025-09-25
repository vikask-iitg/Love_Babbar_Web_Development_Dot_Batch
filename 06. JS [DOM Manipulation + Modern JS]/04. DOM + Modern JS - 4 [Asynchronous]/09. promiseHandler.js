// ------------------------------
// Promise Handler Example
// ------------------------------

// Create a new Promise
let p = new Promise((resolve, reject) => {
    // Asynchronous action (just logs a message after 2 seconds)
    setTimeout(() => {
        console.log("I am inside promise");
    }, 2000);

    // Immediately resolve the promise with this message
    resolve("My Promise Executed Successful");
});

// ------------------------------
// Multiple .then() handlers attached to the SAME promise
// ------------------------------

// First .then()
// Runs when the promise resolves
// Logs the resolved value: "My Promise Executed Successful"
p.then((value) => {
    console.log(value);
});

// Second .then()
// This one ignores the resolved value, and just logs "Congratulations"
p.then(() => {
    console.log("Congratulations");
});

// Third .then()
// Schedules an alert 1 second after the promise is resolved
p.then(() => {
    setTimeout(() => {
        alert("Promise resolved");
    }, 1000);
});
