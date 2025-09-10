// -------------------------------
// Slicing of Array
// -------------------------------

let arr = [1, 2, 3, 4, 5, 6];
console.log("Original Array:", arr);

// Copy full array
let newArray = arr.slice();
console.log("Slice (full copy):", newArray);

// Slice from index 0 to 2 (excluding 3)
newArray = arr.slice(0, 3);
console.log("Slice (0 to 3):", newArray);

// Slice from index 0 to second last element
newArray = arr.slice(0, -1);
console.log("Slice (0 to -1):", newArray);

// Slice from index 2 to 4 (excluding 5)
newArray = arr.slice(2, 5);
console.log("Slice (2 to 5):", newArray);
