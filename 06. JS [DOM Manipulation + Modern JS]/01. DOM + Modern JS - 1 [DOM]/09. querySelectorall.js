// ------------------------------
// querySelectorAll Example
// ------------------------------

// By class
let classItem = document.querySelectorAll('.item');
console.log(classItem); // NodeList of all <li class="item">

// By ID
let idItem = document.querySelectorAll('#container');
console.log(idItem); // NodeList with 1 element (IDs are unique)

// By tag
let tagItem = document.querySelectorAll('li');
console.log(tagItem); // NodeList of all <li> elements
