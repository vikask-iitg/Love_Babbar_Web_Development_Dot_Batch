// ------------------------------
// addEventListener() in JavaScript
// ------------------------------

// addEventListener(type, listener)
// -> Attaches an event handler to an element without overwriting existing handlers.
// -> Syntax: element.addEventListener('event', callbackFunction);

// ------------------------------
// Step 1: Select button element
// ------------------------------
let btn = document.getElementById('btn');
console.log(btn);   // logs the button element

// ------------------------------
// Step 2: Utility function to get random number
// ------------------------------
// random(n) → returns a random integer between 0 and n
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// ------------------------------
// Step 3: Attach click event listener
// ------------------------------
// When button is clicked → generate random RGB color
// → Apply it as background color of <body>
btn.addEventListener('click', () => {
    let red = random(255);
    let green = random(255);
    let blue = random(255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    document.body.style.backgroundColor = color;
});
