// -------------------------------
// Objects in JavaScript
// -------------------------------

// Object literal
const rectangle = {
    length: 2,   // property
    breadth: 4,  // property

    // method to draw rectangle
    draw: function () {
        console.log("Drawing Rectangle");
    },

    // method to calculate area
    area: function () {
        // better to use 'this' for reusability
        console.log(`Area of Rectangle: ${this.length * this.breadth}`);
    }
};

// Accessing properties
console.log(rectangle.length);   // 2
console.log(rectangle.breadth);  // 4

// Calling methods
rectangle.draw();  // Drawing Rectangle
rectangle.area();  // Area of Rectangle: 8
