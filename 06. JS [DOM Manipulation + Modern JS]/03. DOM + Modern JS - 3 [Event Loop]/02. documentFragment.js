// ------------------------------
// Using DocumentFragment for Optimization
// ------------------------------
// Appending DOM elements one by one is slower because each append
// causes a reflow/repaint in the browser.
// Using a DocumentFragment allows us to build elements in memory first
// and then append them to the DOM in one go, which improves performance.
// ------------------------------

let fruits = ["Mangoes", "Oranges", "Bananas", "Strawberry", "Apple"];

// ------------------------------
// #1 - Adding <li> items one by one (Slower)
// ------------------------------

let list = document.querySelector('ul');   // Select <ul> element
console.log(list);

let t1 = performance.now();  // Start timer

for (let key of fruits) {
    let item = document.createElement('li');  // Create <li> element
    item.textContent = key;                   // Add fruit name
    list.appendChild(item);                   // Append directly to DOM (slow)
}

let t2 = performance.now();  // End timer
console.log(`Adding one by one takes time ${(t2 - t1).toFixed(6)} ms`);

// ------------------------------
// #2 - Using DocumentFragment (Faster)
// ------------------------------

let listOL = document.querySelector('ol');  // Select <ol> element
console.log(listOL);

t1 = performance.now();  // Start timer

// Create a document fragment (lives in memory, not the DOM)
let fragment = document.createDocumentFragment();

for (let key of fruits) {
    let item = document.createElement('li');  // Create <li> element
    item.textContent = key;                   // Add fruit name
    fragment.appendChild(item);               // Add <li> to fragment
}

// Append fragment once → all <li> elements are inserted at once
listOL.appendChild(fragment);

t2 = performance.now();  // End timer
console.log(`Fragment takes time ${(t2 - t1).toFixed(6)} ms`);

