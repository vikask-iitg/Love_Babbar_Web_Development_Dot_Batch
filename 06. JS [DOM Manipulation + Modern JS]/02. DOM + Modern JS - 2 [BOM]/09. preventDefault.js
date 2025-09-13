// ------------------------------
// preventDefault() in JavaScript
// ------------------------------

// Some elements have default browser behaviors:
// - <a> (links) → navigate to URL
// - <form> → submit/reload page
// - right-click → context menu
// - drag & drop → file open
//
// e.preventDefault() → cancels that default behavior,
// while still allowing the event to propagate (bubble).

// ------------------------------
// Step 1: Select <a id="list"> (or any clickable link)
// ------------------------------
let link = document.getElementById('link');

// ------------------------------
// Step 2: Add click listener
// ------------------------------
link.addEventListener('click', function(e) {
    e.preventDefault();   // stop default navigation
    alert("Default action prevented! Link will not open.");
});
