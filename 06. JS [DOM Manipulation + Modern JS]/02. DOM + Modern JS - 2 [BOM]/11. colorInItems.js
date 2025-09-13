// -----------------------------------------------
// Styling Multiple Elements with querySelectorAll
// -----------------------------------------------

// querySelectorAll('.item')
// -> Returns a NodeList of all elements with class="item"
// -> We can loop through them using forEach()

// ------------------------------
// Step 1: Select all list items
// ------------------------------
let heading = document.querySelectorAll('.item');

// ------------------------------
// Step 2: Apply styles to each item
// ------------------------------
heading.forEach((element) => {
    element.style.background = 'green';  // set background color
    element.style.color = 'yellow';      // set text color
});
