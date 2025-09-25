// ------------------------------
// Example: Using Fetch API (GET requests)
// ------------------------------


/*
  📌 Definition:
  A GET request is an HTTP method used to retrieve data from a server.
  - It does not modify or change data on the server.
  - No request body is sent with GET.
  - The server responds with the requested data (often in JSON or HTML format).
*/

// 1. Define the URL to retrieve all to-do items
// The endpoint returns an array of all to-do objects
const url = "https://jsonplaceholder.typicode.com/todos";

// 2. Fetch all to-dos
fetch(url)
  // Convert the raw response into JSON format
  .then((response) => response.json())
  // Log the full list of to-dos to the console
  .then((json) => console.log(json));


// 3. Define the URL to retrieve a single to-do item (with id = 5)
// The endpoint returns a single to-do object
const url2 = "https://jsonplaceholder.typicode.com/todos/5";

// 4. Fetch a specific to-do by ID
fetch(url2)
  // Convert the raw response into JSON format
  .then((response) => response.json())
  // Log the to-do with id = 5 to the console
  .then((json) => console.log(json));


// NOTE : Output of both the fetch can be in any order