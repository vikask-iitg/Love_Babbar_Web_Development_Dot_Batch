// -------------------------------
// Combining Objects in JavaScript
// -------------------------------

let obj1 = {
    No1: 1,
    Name1: "Vikas",
};

let obj2 = {
    No2: 2,
    Name2: "Khurendra",
};

// Object.assign(target, source)
// → Copies properties from source to target
let merged = Object.assign(obj1, obj2);
console.log("Combined Object:", merged);
