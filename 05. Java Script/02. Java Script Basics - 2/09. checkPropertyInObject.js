// -------------------------------
// Check property in object
// -------------------------------

const rectangle = {
    length: 2,
    breadth: 4,

    // method to draw rectangle
    draw: function () {
        console.log("Drawing Rectanlge");
    },

    // method to calculate area
    area: function () {
        console.log(`Are of Rectangle: ${rectangle.length * rectanlge.breadth}`);
    },
};

// -------------------------------
// Check if property exists
// -------------------------------

// 'in' operator checks if a property exists in an object
if ("length" in rectangle) {
    console.log("Length property exists in rectangle");
} else {
    console.log("Absent");
}
