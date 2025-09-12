// ------------------------------
// # createElement in JavaScript
// ------------------------------

// Step 1: Create a new <h1> element (empty by default)
let newElement = document.createElement('h1');

// Step 2: Create a text node with some content
let content = document.createTextNode("This is new heading");

// Step 3: Append the text node to the <h1> element
newElement.appendChild(content);

// Step 4: Log the new element
console.log(newElement);

// Output:
// <h1>This is new heading</h1>
