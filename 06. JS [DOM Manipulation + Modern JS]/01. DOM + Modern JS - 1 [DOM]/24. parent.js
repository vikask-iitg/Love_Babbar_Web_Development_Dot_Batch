// ------------------------------
// parent in JavaScript
// ------------------------------

// Select the first element with class "item"
let item = document.querySelector('.item');

// Logs the <li class="item"> element
console.log(item);

// .parentNode returns the parent node (can be an element, document, or document fragment)
console.log(item.parentNode);
// Example Output: <ul id="list">...</ul>

// .parentElement returns the parent element (null if parent is not an element)
console.log(item.parentElement);
// Example Output: <ul id="list">...</ul>
