// ------------------------------
// Event Bubbling in JavaScript
// ------------------------------

// By default, events propagate (bubble) from the target element
// → up through its ancestors in the DOM tree.
// Event object properties:
// - event.target → the element that actually triggered the event
// - this (or event.currentTarget) → the element whose listener is currently running

// ------------------------------
// Step 1: Select <ul id="list">
// ------------------------------
let head = document.querySelector("#list");

// ------------------------------
// Step 2: Listener on <h1> itself
// ------------------------------
head.addEventListener('click', function (event) {
    alert("target1 = " + event.target.tagName + ", this = " + this.tagName);
});

// ------------------------------
// Step 3: Listener on <h1>'s parent
// ------------------------------
head.parentNode.addEventListener('click', function (event) {
    alert("target2 = " + event.target.tagName + ", this = " + this.tagName);
    // Extra effect: change grandparent background
    head.parentNode.parentNode.style.backgroundColor = 'lightgreen';
});

// ------------------------------
// Step 4: Listener on <h1>'s grandparent
// ------------------------------
head.parentNode.parentNode.addEventListener('click', function (event) {
    alert("target3 = " + event.target.tagName + ", this = " + this.tagName);
});

// Output
// target1 = LI, this = UL
// target2 = LI, this = DIV
// target3 = LI, this = BODY
// backgroundColor set to lightgreen
