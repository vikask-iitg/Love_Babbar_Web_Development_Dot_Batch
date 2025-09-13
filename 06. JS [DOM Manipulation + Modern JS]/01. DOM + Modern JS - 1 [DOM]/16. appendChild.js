// ------------------------------
// # appendChild in JavaScript
// ------------------------------

// Step 1: Select the parent element (<ul id="list">)
let parent = document.querySelector('#list');

// Step 2: Create a new <h1> element
let newElement = document.createElement('h1');

// Step 3: Create a text node with content
let content = document.createTextNode("This is new heading");

// Step 4: Append the text node inside <h1>
newElement.appendChild(content);

// Step 5: Append the <h1> element as a child of <ul id="list">
parent.appendChild(newElement);

// ✅ After this code, your HTML becomes:

// <ul id="list">
//     <li class="item">Item 1</li>
//     <li class="item">Item 2</li>
//     <li class="item">Item 3</li>
//     <h1>This is new heading</h1>   <-- Newly added element
// </ul>
