// ------------------------------
// Default Parameters in JavaScript
// ------------------------------
// Default parameters allow you to set a fallback value for a function parameter
// if no argument is provided for it during the function call.

let simpleInterest = (P, T, R = 10) => {
    // If 'R' is not passed, it defaults to 10
    return (P * T * R) / 100;
};

console.log(simpleInterest(1000, 4, 40)); // Output: 1600 (uses R = 40)
console.log(simpleInterest(1000, 4));     // Output: 400  (uses default R = 10)
