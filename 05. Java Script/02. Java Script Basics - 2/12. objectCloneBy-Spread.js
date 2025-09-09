// -----------------------------------
// Object Cloning using Object spread
// -----------------------------------

const rectangle = {
    length: 2,
    breadth: 4,

    // method to draw rectangle
    draw: function () {
        console.log("Drawing rectanlge");
    },

    // method to calculate area
    area: function () {
        console.log(`Area of Rectangle: ${rectangle.length * rectanble.breadth}`);
    },
};

console.log("Duplicates");

// -------------------------------
// Cloning with Spread Operator
// -------------------------------
// Using spread syntax {...rectangle}
// This creates a shallow clone of the object
// i.e., top-level properties are copied,
// but nested objects (if any) remain references.
const duplicate = { ...rectangle };

console.log(duplicate); // cloned object
