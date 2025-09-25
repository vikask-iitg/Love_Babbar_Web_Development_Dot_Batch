// ------------------------------
// Call Stack Example #2
// ------------------------------
// This example shows how functions call each other
// and how the call stack keeps track of nested function calls.

function a() {
    console.log('hi');  // Step 1: log "hi"
    b();                // Step 2: call function b()
}

function b() {
    console.log('Hello'); // Step 3: log "Hello"
}

// Program execution starts here
a();  // Call function a()
