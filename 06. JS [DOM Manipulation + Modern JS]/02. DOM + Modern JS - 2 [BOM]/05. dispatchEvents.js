// ------------------------------
// dispatchEvent() in JavaScript
// ------------------------------

// Custom events allow you to define and trigger your own event types.
// new Event(type, options)
// -> type: The event name (string)
// -> options: { bubbles: boolean, cancelable: boolean }

// dispatchEvent(event)
// -> Manually triggers the specified event on a target element/object.

// ------------------------------
// Step 1: Create custom event "hello"
// ------------------------------
let event = new Event("hello", {
    bubbles: true,   // event will bubble up through DOM
    // cancelable: true  // (optional) allows preventDefault()
});

// ------------------------------
// Step 2: Listen for the custom event
// ------------------------------
document.addEventListener("hello", function() {
    alert("Custom Event Dispatched from document!");
});

// ------------------------------
// Step 3: Dispatch (trigger) the custom event
// ------------------------------
document.dispatchEvent(event);
