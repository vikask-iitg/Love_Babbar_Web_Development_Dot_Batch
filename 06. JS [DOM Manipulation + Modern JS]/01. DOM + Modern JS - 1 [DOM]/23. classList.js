// ------------------------------
// classList in JavaScript
// ------------------------------

// Select the element with id "form-section"
let element = document.getElementById('form-section');

// .classList returns a DOMTokenList (like an array of classes)
console.log(element.classList);
// Example Output: DOMTokenList ['myClass']   (depends on HTML)

// typeof shows it's an object
console.log(typeof element.classList);
// Output: "object"

// Add a new class
element.classList.add('superHead');

// Remove the class
element.classList.remove('superHead');

// Toggle adds the class if it's not there, or removes it if it is
element.classList.toggle('superHead');

// Check if the element currently has the class
console.log(element.classList.contains('superHead'));
// Output: true or false (depends on toggle above)

// Toggle again
element.classList.toggle('superHead');

// Check again
console.log(element.classList.contains('superHead'));
// Output: true or false (opposite of previous)
