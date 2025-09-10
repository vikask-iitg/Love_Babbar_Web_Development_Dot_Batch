// -------------------------------
// Removing Elements from Arrays
// -------------------------------

let arr = [1, 2, 5, 4, 7];
console.log(arr);  // [1, 2, 5, 4, 7]

// #1 - Remove from beginning (shift)
arr.shift();        // removes first element
console.log(arr);   // [2, 5, 4, 7]

// #2 - Remove from end (pop)
arr.pop();          // removes last element
console.log(arr);   // [2, 5, 4]
