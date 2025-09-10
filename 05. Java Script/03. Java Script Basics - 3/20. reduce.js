// -------------------------------
// Reduce Function in JavaScript
// -------------------------------

let arr = [1, 2, 4, 5, 6];

// -------------------------------
// 1. Simple sum using loop
// -------------------------------
let simpleSum = 0;
for (let val of arr) {
    simpleSum += val;
}
console.log("Sum using loop:", simpleSum);

// -------------------------------
// 2. Sum using reduce()
// -------------------------------


// reduce() → applies a function against an accumulator (totalSum)
// and each array element (val) to reduce it to a single value.

// reduce(callback, initialValue)
// callback → (accumulator, currentValue)
let reduceSum = arr.reduce((totalSum, val) => totalSum + val, 0);
console.log("Sum using reduce:", reduceSum);
