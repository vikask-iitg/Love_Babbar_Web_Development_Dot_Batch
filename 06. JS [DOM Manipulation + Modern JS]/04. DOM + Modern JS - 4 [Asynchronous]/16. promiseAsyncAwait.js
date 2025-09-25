// ------------------------------
// Promise + Async/Await Examples
// ------------------------------

// #1 Simple async function
// ------------------------------

// An async function automatically wraps the return value
// inside a resolved Promise.
async function getNumber() {
    return 5; // returns Promise.resolve(5)
}

// Usage
getNumber().then((value) => console.log("Example #1:", value));
// Expected output: Example #1: 5


// #2 Using await with a Promise
// ------------------------------

// Waits for 1 second before resolving with "Done!"
async function waitForCompletion() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1000); // resolves after 1 second
    });

    // Execution pauses here until promise resolves
    let result = await promise;
    console.log("Example #2:", result);
    // Expected output after 1 second: Example #2: Done!
}

// Usage
waitForCompletion();


// #3 Using async function with multiple promises
// ------------------------------

// Simulates fetching weather data for two cities
async function getWeatherReports() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Delhi Weather is 32°C");
        }, 10000); // resolves after 10 seconds
    });

    let hyderabadWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hyderabad Weather is 28°C");
        }, 5000); // resolves after 5 seconds
    });

    // Without await, these are just Promises
    let dw = delhiWeather;
    let hw = hyderabadWeather;

    return [dw, hw]; // returns array of Promises
}

// Usage
console.log("Example #3:", getWeatherReports());
// Output: Example #3: [Promise, Promise]


// NOTE :-
// async only makes sure your function returns a Promise.
// You still need to use await wherever you want the code to “pause” until a promise settles.

// Think of it like this:
// async = “I promise to return a Promise.”
// await = “Wait here until this Promise finishes.”