// -------------------------------
// for...of loop
// -------------------------------

// Example with array of strings
let arr = ["MyName", "is", "Vikas", "Khurendra"];
for (let key of arr) {
    console.log(key); // prints each element directly
}

// Example with array of numbers
arr = [10, 15, 20];
for (let key of arr) {
    console.log(key); // prints each number
}

let str = "Hello";
for (let ch of str) {
    console.log(ch);  // H e l l o
}

// When do we use for-of loop?

// Ans: for-of is used to iterate over values of iterable objects.
// Works best with:
// Arrays
// Strings
// Maps
// Sets
// NodeLists (in the DOM)


// for...in → iterates over keys (property names) → good for objects.
// for...of → iterates over values → good for arrays, strings, and other iterables