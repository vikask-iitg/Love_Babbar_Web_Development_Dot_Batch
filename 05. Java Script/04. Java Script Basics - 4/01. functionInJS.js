// -------------------------------
// Functions in JavaScript
// -------------------------------

// A simple function that takes two numbers and returns their sum
function addTwoNumbers(a, b) {
    let sum = a + b;
    return sum; // return the result
}

// Function call with fixed values
console.log("Sum (2 + 8):", addTwoNumbers(2, 8));

// Generating two random integers between 0 and 1000
let num1 = Math.round(Math.random() * 1000);
let num2 = Math.round(Math.random() * 1000);

console.log(`Sum (${num1} + ${num2}):`, addTwoNumbers(num1, num2));
