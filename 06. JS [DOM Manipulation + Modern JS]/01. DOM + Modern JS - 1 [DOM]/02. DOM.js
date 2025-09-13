// ------------------------------
// Document Object in JavaScript
// ------------------------------

// The `document` object represents the entire HTML page (DOM).
// It is a property of the `window` object → `window.document`.
// Used to access and manipulate elements in the webpage.

// Logs the entire HTML document (DOM tree)
console.log(document);

// Logs only the <body> element of the page
console.log(document.body);

// ------------------------------
// Examples of Document Usage
// ------------------------------

// 1. Change background color of the page
document.body.style.backgroundColor = "lightblue";

// 2. Change text inside the body
document.body.innerText = "Hello, this text is replaced by JavaScript!";

// 3. Add new content to the body
document.body.innerHTML += "<h1>Hello from JavaScript</h1>";

// 4. Create a new element dynamically
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was added using JavaScript.";
document.body.appendChild(newPara);

// 5. Change page title
document.title = "JavaScript DOM Demo";
