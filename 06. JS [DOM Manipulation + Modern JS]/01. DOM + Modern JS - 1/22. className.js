// ------------------------------
// Working with className and classList in JavaScript
// ------------------------------

// Select the element with the id "form-section"
let element = document.getElementById('form-section');

// .className returns the value of the "class" attribute as a string
console.log(element.className);
// Example Output: "myClass"   (depends on the HTML)

// .classList is a DOMTokenList object (not a string)
// It provides methods like add(), remove(), toggle(), contains()
console.log(element.classList);
// Output: "object"

// Adding another class by concatenating to className
element.className += ' superHead';

// Select elements with the class "superHead"
let element2 = document.getElementsByClassName('superHead');

// Access the first matched element [0]
console.log(element2[0].textContent);