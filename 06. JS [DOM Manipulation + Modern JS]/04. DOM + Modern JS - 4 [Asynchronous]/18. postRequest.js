// ------------------------------
// POST Request
// ------------------------------

// Function: createTodo
// ------------------------------
// - Uses fetch() with the POST method to send data to the server.
// - Sends a new "todo" object in JSON format.
// - Waits for the response and parses it as JSON.
// - Returns the parsed response (the created todo).
// ------------------------------
const createTodo = async () => {
    // Request options
    let options = {
        method: "POST", // HTTP method → create new resource
        body: JSON.stringify({
            title: "Vikas",          // sample title
            body: "This is body",    // sample content
            userId: 1,               // user id
        }),
        headers: {
            "content-type": "application/json; charset=UTF-8", 
            // tells server the body is JSON
        },
    };

    // Make POST request to placeholder API
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);

    // Parse response as JSON
    let response = await p.json();

    // Return the created todo object
    return response;
};


// ------------------------------
// Function: mainFunc
// ------------------------------
// - Calls createTodo()
// - Waits for it to complete
// - Logs the created todo to console
// ------------------------------
const mainFunc = async () => {
    let todo = await createTodo();
    console.log("Created Todo:", todo);
};


// ------------------------------
// Execute main function
// ------------------------------
mainFunc();
