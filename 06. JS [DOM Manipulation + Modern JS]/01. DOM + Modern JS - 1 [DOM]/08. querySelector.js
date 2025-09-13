// ------------------------------
// querySelector Example
// ------------------------------

// returns the FIRST match of a CSS selector

// By class
let classItem = document.querySelector('.highlight');
console.log(classItem); // <span class="highlight">demo paragraph</span>

// By ID
let idItem = document.querySelector('#container');
console.log(idItem); // <div id="container">...</div>

// By tag
let tagItem = document.querySelector('li');
console.log(tagItem); // <li class="item">Item 1</li>
