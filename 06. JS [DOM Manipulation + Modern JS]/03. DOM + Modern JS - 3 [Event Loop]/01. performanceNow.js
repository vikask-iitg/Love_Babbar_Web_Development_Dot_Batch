// ------------------------------
// performance.now() Example
// ------------------------------
// performance.now() is a standard way to measure the performance of code.
// It returns a high-resolution timestamp in milliseconds (with fractions).
// This allows us to calculate how long a particular block of code takes to run.

// ------------------------------
// Setup: Create an array of size 10 filled with 1s
// ------------------------------
let size = 100;
let arr = Array(size).fill(1);   // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

// ------------------------------
// #1 - Normal for loop
// ------------------------------

let t1 = performance.now();  // Start time
for (let i = 0; i < size; i++) {
    console.log(arr[i]);     // Access each element by index
}
let t2 = performance.now();  // End time
console.log(`Normal loop takes time to run ${(t2 - t1).toFixed(6)} ms.`);

// ------------------------------
// #2 - for...of loop
// ------------------------------

t1 = performance.now();
for (let i of arr) {          // Iterate directly over array elements
    console.log(i);
}
t2 = performance.now();
console.log(`For...of loop takes time to run ${(t2 - t1).toFixed(6)} ms.`);

// ------------------------------
// #3 - forEach loop
// ------------------------------

// forEach() is a built-in array method that executes a callback for each element
t1 = performance.now();
arr.forEach((value) => {
    console.log(value);
});
t2 = performance.now();
console.log(`forEach loop takes time to run ${(t2 - t1).toFixed(6)} ms.`);

// ------------------------------
// #4 - While loop
// ------------------------------

t1 = performance.now();
let i = 0;
while (i < size) {           // Loop until condition is false
    console.log(arr[i]);
    i++;
}
t2 = performance.now();
console.log(`While loop takes time to run ${(t2 - t1).toFixed(6)} ms.`);

