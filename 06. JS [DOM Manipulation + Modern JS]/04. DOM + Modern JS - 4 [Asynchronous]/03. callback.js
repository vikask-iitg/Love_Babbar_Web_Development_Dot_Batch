// ------------------------------
// Callback Functions in JavaScript
// ------------------------------
// A callback is a function passed as an argument to another function,
// to be executed later (after some event, task, or operation is done).
// ------------------------------

// ------------------------------
// Example 1 - Button Click (Event Callback)
// ------------------------------
let btn = document.getElementById('btn');

// Define the callback function
const callback = () => {
    console.log("Button Clicked");  // Runs when button is clicked
};

// Register callback with event listener
btn.addEventListener('click', callback);
// -> When the user clicks the button, the callback is executed.


// ------------------------------
// Example 2 - Loading an External Script (Async Callback)
// ------------------------------
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    // onload event → script loaded successfully
    script.onload = function() {
        console.log("Script loaded with source: " + src);
        callback(null, src);  // Pass null as error, src as success
    };

    // onerror event → script loading failed
    script.onerror = function() {
        console.log("Error comes: " + src);
        callback(new Error("Error came: " + src)); // Pass error object
    };

    // Append script to document
    document.body.appendChild(script);
}

let script = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";

// Callback function to handle status
function status(error, src) {
    if (error) {
        console.log("Error: " + src);  // If error occurs
        return;
    }
    console.log("Script Loaded: " + src); // If success
}

// Load external script with callback
loadScript(script, status);
