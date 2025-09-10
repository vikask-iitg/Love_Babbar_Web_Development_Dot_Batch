// -------------------------------
// Combining Two Arrays
// -------------------------------

let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];

console.log("First Array:", first);
console.log("Second Array:", second);

// Using concat()
let combine = first.concat(second);
console.log("Combined Array (concat):", combine);

// Using spread operator
let combine2 = [...first, ...second];
console.log("Combined Array (spread):", combine2);
 