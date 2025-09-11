// ------------------------------
// Arrow Function in JavaScript
// ------------------------------
// Arrow functions are a shorter syntax for writing functions.
// They can have a block body (with return) or a concise body (implicit return).

// Block body arrow function
let add = (a, b) => {
    let sum = a + b;
    return sum;
};
console.log(add(24, 44)); // Output: 68

// Concise body arrow function (implicit return)
let addArrow = (a, b) => a + b;
console.log(addArrow(11, 35)); // Output: 46
