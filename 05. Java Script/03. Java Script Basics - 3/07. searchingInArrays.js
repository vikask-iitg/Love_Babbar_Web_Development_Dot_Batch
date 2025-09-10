// -------------------------------
// Searching in Arrays
// -------------------------------

let arr = [1, 2, 5, 7, 3];
console.log(arr);  // [1, 2, 5, 7, 3]

// ---------- indexOf() ----------
// Returns the index of the first occurrence of the element
// If element is not found → returns -1
console.log(arr.indexOf(5));   // 2  (5 is at index 2)
console.log(arr.indexOf(50));  // -1 (50 not found)


// ---------- includes() ----------
// Returns true if element is found, false otherwise
console.log(arr.includes(5));   // true
console.log(arr.includes(50));  // false
