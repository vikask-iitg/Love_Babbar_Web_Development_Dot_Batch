// ------------------------------
// Event Object in JavaScript
// ------------------------------

// When an event is triggered, the browser passes an "event object"
// to the event handler. It contains information about the event
// (type, target element, mouse position, key pressed, etc.).

// Common properties:
// - event.type        → type of event (e.g., "click")
// - event.target      → element that actually triggered the event
// - event.currentTarget (or this) → element whose handler is running
// - event.clientX / event.clientY → mouse coordinates
// - event.key         → key pressed (for keyboard events)

// ------------------------------
// Step 1: Select <h1 id="main-title">
// ------------------------------
let head = document.getElementById('main-title');

// ------------------------------
// Step 2: Add click event listener
// ------------------------------
head.addEventListener('click', function(event) {
    console.log(event);              // full event object
    console.log(event.target);       // the element clicked (<h1>)
    console.log(event.target.tagName); // the tag name (e.g., "H1")
});
