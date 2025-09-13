// ------------------------------
// # textContent in JavaScript
// ------------------------------

// Select the element with the id "list"
let list = document.querySelector('#list');

// textContent returns the text content of the element and all its children
// Unlike innerText, it includes hidden text and preserves spacing exactly as in the DOM
console.log(list.textContent);

// Output:
// Item 1
// Item 2
// Item 3
