// ------------------------------
// Named Parameters in JavaScript
// ------------------------------
// In regular functions (not arrow functions), the `arguments` object
// contains all arguments passed, even if they are not explicitly defined
// in the function parameters.
// `arguments` is an array-like object (iterable) that lets you access
// all arguments dynamically.

let add = function addTwoNumber(a, b, ...args) {
    console.log("Arguments object:", args); // logs all arguments passed

    let sum = 0;
    for (let key of args) {
        sum += key; // iterate over all arguments and sum them
    }
    return sum;
};

console.log(add(1, 2, 3, 4, 5)); // Output: 12



// ------------------------------
// Sum All Arguments using Rest Operator
// ------------------------------
// The rest operator `...args` collects all remaining arguments into an array.
// This is a modern alternative to `arguments` and works in both normal and arrow functions.

let addAll = function addTwoNumbers(a, b, ...args) {
    // Combine the first two parameters with the rest into a single array
    const allArgs = [a, b, ...args];
    console.log("All arguments:", allArgs);

    // Sum all values
    let sum = 0;
    for (let key of allArgs) {
        sum += key;
    }
    return sum;
};

console.log("Total Sum:", addAll(1, 2, 3, 4, 5)); // Output: 15
