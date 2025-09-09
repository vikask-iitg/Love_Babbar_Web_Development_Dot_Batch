// -------------------------------
// Object Cloning by Iteration
// -------------------------------

const rectangle = {
    length: 2,
    breadth: 4,

    // method to draw rectangle
    draw: function () {
        console.log("Drawing rectangle");
    },

    // method to calculate area
    area: function () {
        console.log(`Area of rectangle: ${rectangle.length * rectangle.breadth}`);
    }
};

console.log("Rectangle");
console.log(rectangle); // original object

// -------------------------------
// Cloning process
// -------------------------------

// Create empty object
const duplicate = {};

// Copy properties using for...in
for (let key in rectangle) {
    duplicate[key] = rectangle[key];
}

console.log("Duplicate");
console.log(duplicate); // cloned object
