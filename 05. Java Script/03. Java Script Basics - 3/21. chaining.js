// -------------------------------
// Chaining in JavaScript
// -------------------------------

let arr = [1, 2, 3, 4, 5, 6];

// -------------------------------
// Step 1: Do it separately
// -------------------------------

// 1. Filter numbers greater than 2
let greaterThanTwo = arr.filter(val => val > 2);
console.log("Greater than 2:", greaterThanTwo);

// 2. Square each number
let squares = greaterThanTwo.map(num => num * num);
console.log("Squares:", squares);

// 3. Keep only odd numbers (val & 1 checks if odd)
let oddSquares = squares.filter(val => val & 1);
console.log("Odd Squares:", oddSquares);

// -------------------------------
// Step 2: Using method chaining
// -------------------------------
let chain = arr
    .filter(val => val > 2)   // filter > 2
    .map(num => num * num)    // square them
    .filter(val => val & 1);  // keep odd squares

console.log("Final result using chaining:", chain);
