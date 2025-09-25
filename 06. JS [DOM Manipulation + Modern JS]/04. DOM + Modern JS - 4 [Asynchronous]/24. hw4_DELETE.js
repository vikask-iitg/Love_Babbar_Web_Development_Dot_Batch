// ------------------------------
// Example: Using Fetch API (DELETE request)
// ------------------------------

/*
  📌 Definition:
  A DELETE request is an HTTP method used to remove an existing resource 
  from the server.
  - It only needs the unique resource identifier (ID in the URL).
  - It usually does not require a request body.
  - The server typically responds with a success status (e.g., 200 or 204).
  - The deleted resource will no longer be available afterward.
*/

// URL of the resource (to-do with id = 1)
const url = "https://jsonplaceholder.typicode.com/todos/1";

// Step 1: Get the resource before deletion
fetch(url)
  .then(response => response.json())
  .then(json => console.log("Before Delete:", json));

// Step 2: Delete the resource
fetch(url, { method: "DELETE" });

// Step 3: Try to fetch the resource again after deletion
fetch(url)
  .then(response => response.json())
  .then(json => console.log("After Delete (mock API still returns):", json));
