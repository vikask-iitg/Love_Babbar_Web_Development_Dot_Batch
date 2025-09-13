// ------------------------------
// Event Capturing in JavaScript
// ------------------------------

// Event Flow in JS has 3 phases:
// 1. Capturing phase (top → down to target) 
// 2. Target phase (on the element itself) 
// 3. Bubbling phase (target → back up to root)

// By default, addEventListener() listens in the bubbling phase.
// If you pass { capture: true }, it listens in the capturing phase.

// event.target → the element where the event actually happened
// this (or event.currentTarget) → the element whose listener is currently running

// ------------------------------
// Step 1: Select <ul id="list">
// ------------------------------
let head = document.querySelector('#list');

// ------------------------------
// Step 2: Listener on <ul> itself (capturing)
// ------------------------------
head.addEventListener('click', function(event){
    alert("target1 = " + event.target.tagName + ", this = " + this.tagName);
}, { capture: true });

// ------------------------------
// Step 3: Listener on <ul>'s parent (capturing)
// ------------------------------
head.parentNode.addEventListener('click', function(event){
    alert("target2 = " + event.target.tagName + ", this = " + this.tagName);
    // Extra effect: change grandparent background
    head.parentNode.parentNode.style.backgroundColor = 'lightgreen';
}, { capture: true });

// ------------------------------
// Step 4: Listener on <ul>'s grandparent (capturing)
// ------------------------------
head.parentNode.parentNode.addEventListener('click', function(event){
    alert("target3 = " + event.target.tagName + ", this = " + this.tagName);
}, { capture: true });


// Output
// target3 = LI, this = BODY
// target2 = LI, this = DIV
// target1 = LI, this = UL
// backgroundColor set to lightgreen