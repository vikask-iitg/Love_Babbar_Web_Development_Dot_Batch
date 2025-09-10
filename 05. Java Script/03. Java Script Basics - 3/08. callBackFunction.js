// -------------------------------
// Searching in Array of Objects
// -------------------------------

let objArray = [
    { No: 1, Name: "Vikas" },
    { No: 2, Name: "Khurendra" }
];

console.log(objArray);

// ---------- includes() ----------
// Checking with 'includes()' fails for objects
// because objects are compared by reference, not by value
console.log(objArray.includes({ No: 1, Name: "Vikas" }));  
// false → even though it looks the same, it's a different object reference


// ---------- find() ----------
// Use find() with a callback function to search by property
let obj = objArray.find((obj) => obj.Name === "Vikas");
console.log(obj);  
// { No: 1, Name: "Vikas" }
