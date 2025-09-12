// ------------------------------
// # innerText in JavaScript
// ------------------------------

// Select the element with the id "list"
let list = document.querySelector('#list');

// innerText returns the visible text content of the element
// (ignores HTML tags, shows only plain text)
console.log("innerText:");
console.log(list.innerText);

// Output:
// Item 1
// Item 2
// Item 3
