// ------------------------------
// Named Parameters in JavaScript
// ------------------------------
// In regular functions (not arrow functions), the `arguments` object
// contains all arguments passed, even if they are not explicitly defined
// in the function parameters.

let add = function addTwoNumber(a, b) {
    console.log(arguments); // logs all arguments passed to the function

    let sum = 0;
    for (let key of arguments) {
        sum += key; // iterate and sum all arguments
    }
    return sum;
};

console.log(add(1, 2, 3, 4, 5)); // Output: 15



