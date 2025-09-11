// -------------------------------
// Sorting Object by Values
// -------------------------------

const maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
    rocket: 8 * 60 * 60, // 28800
};

// Object.entries(maxSpeed) → converts object into array of [key, value]
// sort(([key1, val1], [key2, val2])) → sorts entries by value
// Object.fromEntries() → converts sorted entries back into object

const sortable = Object.fromEntries(
    Object.entries(maxSpeed).sort(([, a], [, b]) => a - b)
);

console.log("Object sorted by speed:", sortable);
