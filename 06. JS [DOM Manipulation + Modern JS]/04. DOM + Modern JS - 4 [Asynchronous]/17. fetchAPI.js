// ------------------------------
// Fetch API Example
// ------------------------------

// The fetch() function is used to make HTTP requests in JavaScript.
// It returns a Promise that resolves to a Response object.
// Syntax: fetch(url, options)

// ------------------------------
// Example: Fetch weather data for "MDS"
// ------------------------------

let p = fetch("https://goweather.herokuapp.com/weather/MDS");

// Step 1: Handle the response object
p.then((response) => {
    // response.status → HTTP status code (e.g., 200 = OK, 404 = Not Found)
    console.log("Status Code:", response.status);

    // response.ok → true if status is 200–299, false otherwise
    console.log("Is Response OK?:", response.ok);

    // response.headers → contains headers (like content-type, date, etc.)
    console.log("Response Headers:", response.headers);

    // Convert response body into JSON
    // response.json() also returns a Promise
    return response.json();
})

// Step 2: Handle the parsed JSON data
.then((result) => {
    console.log("Weather Data (JSON):", result);
});
