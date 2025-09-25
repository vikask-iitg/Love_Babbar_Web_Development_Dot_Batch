// ------------------------------
// Example: Using Fetch API (PATCH request)
// ------------------------------

/*
  📌 Definition:
  A PATCH request is an HTTP method used to update part of an existing resource 
  on the server.
  - Unlike PUT, which replaces the entire resource,
    PATCH only modifies the specific fields provided in the request body.
  - The resource is identified by its unique ID in the URL.
  - Useful for making partial updates without resending all data.
*/

// URL of the resource (to-do with id = 5)
const url = "https://jsonplaceholder.typicode.com/todos/5";

// Step 1: Get the resource before update
fetch(url)
    .then(response => response.json())
    .then(json => console.log("Before PATCH:", json));

// Step 2: Send PATCH request (only updating 'title')
const options = {
    method: "PATCH",
    body: JSON.stringify({
        title: "Title updated via PATCH ✅", // Only this field is changed
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
};

// Step 3: Try to fetch the resource again after deletion
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log("After PATCH:", json));
