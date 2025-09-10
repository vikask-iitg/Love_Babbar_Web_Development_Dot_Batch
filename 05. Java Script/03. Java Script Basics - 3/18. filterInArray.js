// -------------------------------
// Filtering an Array
// -------------------------------

let arr = [1, 23, 53, 5, 6, 53, 5, 4, 43, 45, 7, 48, 67, 8, 7, 4, 6, 7, 8, 5];
console.log("Original Array:", arr);

// Filter elements that are greater than 4 AND divisible by 4
// filter() returns a new array with all elements that satisfy the condition
let ans = arr.filter(value => value > 4 && value % 4 === 0);
console.log("Filtered Array:", ans);
