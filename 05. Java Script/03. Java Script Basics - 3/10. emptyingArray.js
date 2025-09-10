// -------------------------------
// Emptying Arrays in JavaScript
// -------------------------------

// #1 - Reassign to a new empty array
let arr = [1, 4, 2, 3, 6];
console.log(arr);   // [1, 4, 2, 3, 6]

let arr1 = arr;     // arr1 still points to old array
arr = [];           // new empty array assigned to arr
console.log(arr);   // []
console.log(arr1);  // [1, 4, 2, 3, 6] (not emptied!)

// -------------------------------
// #2 - Set length = 0
let arr2 = arr1;
arr1.length = 0;    // modifies the original array
console.log(arr1);  // []
console.log(arr2);  // [] (also empty, same reference)

// -------------------------------
// #3 - Using splice()
let array = [1, 5, 6, 7, 8, 9];
console.log(array);  // [1, 5, 6, 7, 8, 9]

array.splice(0, array.length);  // removes all elements
console.log(array);             // []
