// ------------------------------
// Example: Using Fetch API (POST request)
// ------------------------------

/*
  📌 Definition:
  A POST request is an HTTP method used to send data to a server
  in order to create a new resource.
  - It includes a request body (usually in JSON format).
  - The server processes the data and typically returns the newly created resource.
  - Unlike GET, POST can change data on the server.
*/

// 1. Define the request options for POST
let options = {
  method: "POST", // Specify the HTTP method as POST
  body: JSON.stringify({   // Convert JavaScript object to JSON string
    title: "Vikas",        // Title field
    body: "This is body",  // Body/description field
    userId: 1,             // ID of the user associated with the post
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
    // This tells the server that the request body is in JSON format
  }
};

// 2. Define the URL where the POST request will be sent
const url = "https://jsonplaceholder.typicode.com/todos";

// 3. Make the POST request using fetch
fetch(url, options)
  // Convert server response to JSON
  .then(response => response.json())
  // Log the newly created resource (mock data from server)
  .then(json => console.log(json));
