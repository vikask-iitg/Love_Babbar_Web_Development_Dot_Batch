// ------------------------------
// setTimeout Example in JavaScript
// ------------------------------
// setTimeout() is used to schedule a piece of code (a callback function)
// to run after a specified delay (in milliseconds).
//
// Syntax:
// setTimeout(callbackFunction, delayInMilliseconds)
//
// Note: setTimeout does not pause the program. It schedules the task
// and continues executing the rest of the code. 
// After the delay, the callback is placed in the event queue
// and executed when the call stack is free.

setTimeout(() => {
    console.log("This will print after 5 seconds");
}, 5000);  // Delay = 5000 ms (5 seconds)
