// -------------------------------
// Sorting an Array
// -------------------------------

let arr = [3, 4, 7, 2, 8, 4, 9, 1];
console.log("Original Array:", arr);

// Default sort() method
// ⚠️ By default, sort() converts numbers to strings and sorts lexicographically.
arr.sort();
console.log("Default sort (lexical):", arr);

// Correct way: Providing a compare function
// (a - b) → Ascending order
let sortedArray = arr.sort((a, b) => a - b);
console.log("Numeric sort (ascending):", sortedArray);

// Example: Descending order
let descSorted = arr.sort((a, b) => b - a);
console.log("Numeric sort (descending):", descSorted);
