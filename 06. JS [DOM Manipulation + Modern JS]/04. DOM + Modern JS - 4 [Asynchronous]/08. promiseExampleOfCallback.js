// ------------------------------
// Function: loadScript
// Dynamically loads a JavaScript file into the document
// Returns a Promise that resolves or rejects based on the load status
// ------------------------------

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        // Step 1: Create a <script> element
        let script = document.createElement("script");
        script.type = "text/javascript"; // define script type
        script.async = true;             // load asynchronously (non-blocking)
        script.src = src;                // set the script source (URL)

        // Step 2: Append <script> to the document <body>
        // This triggers the browser to start downloading the script
        document.body.appendChild(script);

        // Step 3: Handle successful loading
        // If the script loads correctly, resolve the promise
        script.onload = () => {
            resolve("Script Successfully Loaded");
        };

        // Step 4: Handle failure
        // If there is an error while loading, reject the promise
        script.onerror = () => {
            reject("Script Failure");
        };
    });
};

// ------------------------------
// Example usage
// ------------------------------

// URL for Bootstrap v5.2.3 JS bundle (includes Popper.js)
let src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";

// Call loadScript → it returns a Promise
let p = loadScript(src);

// Handle the promise
// .then() → runs if the script is loaded successfully
// .catch() → runs if the script fails to load
p.then((value) => console.log(value))    // Output: "Script Successfully Loaded"
 .catch((error) => console.log(error));  // Output: "Script Failure"
