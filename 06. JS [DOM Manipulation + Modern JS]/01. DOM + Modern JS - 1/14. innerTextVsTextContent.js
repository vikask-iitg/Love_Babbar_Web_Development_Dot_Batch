// --------------------------------------
// innerText VS textContent in JavaScript
// --------------------------------------

let list = document.querySelector('#container');

// ------------------------------
// innerText
// ------------------------------
console.log(list.innerText);
// Output:
// Item 1
// Item 2
// Item 3

// ------------------------------
// textContent
// ------------------------------
console.log(list.textContent);
// Output:
// Item 1
// Item 2
// Item 3
// This is Hidden


// let el = document.querySelector('#example');

// console.log(el.innerText);    // Output: "Hello World"
// console.log(el.textContent);  // Output: "HelloHiddenWorld"
