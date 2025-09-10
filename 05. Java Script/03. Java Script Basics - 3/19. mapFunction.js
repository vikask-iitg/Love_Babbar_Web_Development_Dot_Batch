// -------------------------------
// Map Function in JavaScript
// -------------------------------

let arr = [1, 23, 53, 5, 6, 53, 5, 4, 43, 45, 7, 48, 67, 8, 7, 4, 6, 7, 8, 5];
console.log("Original Array:", arr);

// map() → creates a new array by applying a function to each element

// Example 1: Mapping each number to its square
let arrSquare = arr.map(val => val * val);
console.log("Squares:", arrSquare);

// Example 2: Converting each value into an object
let objArray = arr.map(val => { 
    return { Element: val };
});
console.log("Array of Objects:", objArray);
