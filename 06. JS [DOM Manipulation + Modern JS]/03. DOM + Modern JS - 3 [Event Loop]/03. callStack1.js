// ------------------------------
// Call Stack Example #1
// ------------------------------
// The call stack is a mechanism JavaScript uses to keep track of
// function execution (what function is currently running).
// It works like a stack data structure (LIFO: Last In, First Out).

function a() {
    console.log('hi');   // This will run when function a() is called
}

function b() {
    console.log('Hello'); // This will run when function b() is called
}

// Execution begins here
a(); // Function 'a' is pushed to the call stack, executed, then popped off
b(); // Then function 'b' is pushed to the call stack, executed, then popped off
