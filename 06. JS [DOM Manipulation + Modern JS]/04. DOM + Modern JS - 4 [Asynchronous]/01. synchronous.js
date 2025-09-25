// ------------------------------
// Sequential Execution in JavaScript
// ------------------------------

// JavaScript executes code line by line (synchronously) unless
// asynchronous functions (like setTimeout, promises, etc.) are used.
// This example shows how instructions are executed in sequence.

let a = prompt("Enter your name: ");   // Step 1: Browser asks user for input
console.log(a);                        // Step 2: Logs the entered name

let num1 = 10;                         // Step 3: Assign value 10 to num1
let num2 = 20;                         // Step 4: Assign value 20 to num2

console.log(num1, num2);               // Step 5: Logs 10 and 20
console.log("Sum: ", num1 + num2);     // Step 6: Logs "Sum: 30"
