// -------------------------------
// Object Cloning using Object.assign()
// -------------------------------

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
// Cloning with Object.assign()
// -------------------------------

// Creates a shallow copy of rectangle into duplicate
const duplicate = Object.assign({}, rectangle);

console.log(duplicate); // cloned object
