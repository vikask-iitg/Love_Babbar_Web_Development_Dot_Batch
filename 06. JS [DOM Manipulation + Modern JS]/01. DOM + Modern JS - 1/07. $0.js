// --------------------------------------
// Using $0, $1, $2... in Chrome DevTools
// --------------------------------------

// In Chrome DevTools Console:
// - $0 returns the most recently selected DOM element (in the Elements panel).
// - $1 returns the second most recently selected element.
// - $2 the third most recently selected, and so on.
// This works only in DevTools, not inside a .js file.
//
// Example:
// If you select <div id="box1"> in Elements tab, 
// then typing $0 in console will reference that element.

let item = $0; // grabs the last selected element from Elements panel
console.log(item);

// Output: Logs the DOM node of the last selected element 
// Example: <div id="box1" class="box">Box 1</div>
