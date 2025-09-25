// ------------------------------
// Example: Using Fetch API (PUT request)
// ------------------------------

/*
  📌 Definition:
  A PUT request is an HTTP method used to update an existing resource 
  on the server by replacing it with new data.
  - It requires the full updated data in the request body (not just changes).
  - The resource is identified by its unique ID in the URL.
  - If the resource exists → it is completely replaced.
  - If the resource does not exist → some servers may create it.
*/

// URL for the resource with id = 5
const url = "https://jsonplaceholder.typicode.com/todos/5";

// Step 1: Retrieve the current resource before updating
fetch(url)
    .then(response => response.json())
    .then(json => console.log("Before Update:", json));

// Step 2: Define options for PUT request (replace data of id = 5)
const options = {
    method: "PUT",
    body: JSON.stringify({
        id: 5,                                // ID of resource being updated
        title: "Title is updated to Khurendra", // Updated title
        userId: 1,
        completed: false,                     // Reset completion status
    }),
    headers: {
        "content-type": "application/json; charset=UTF-8",
    },
};

// Step 3: Send the PUT request to update resource
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log("After Update:", json));
