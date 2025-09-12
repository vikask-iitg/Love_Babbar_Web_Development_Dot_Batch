// ------------------------------
// getElementsByName Example
// ------------------------------

// The getElementsByName() method returns a NodeList of all elements 
// with the specified "name" attribute (not id or class).
// Commonly used with <input> elements like textboxes, radios, checkboxes, etc.

let element2 = document.getElementsByName('gender');
console.log(element2); 

// Output: NodeList(2) [input[type="radio"], input[type="radio"]]
// Both radio buttons with name="gender" will be logged
