// ------------------------------
// cssText Property in JavaScript
// ------------------------------

// Select the element with the id "form-section"
let element = document.getElementById('form-section');

// ✅ Using cssText with multiline template string
// Adds multiple CSS properties at once
element.style.cssText += `
    color: red;
    background-color: yellow;
    border: 2px solid black;
`;

// ✅ cssText Example (Single Line)
// Same effect as above, but written in one line
element.style.cssText += "color: red; background-color: yellow; border: 2px solid black;";

// After this code runs, the element <div id="form-section"> 
// will have red text, yellow background, and a 2px black border.
