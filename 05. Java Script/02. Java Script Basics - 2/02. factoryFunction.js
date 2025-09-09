// -------------------------------
// Factory Function Example
// -------------------------------

// Factory function: returns a new rectangle object
function createRectangle() {
    const rectangle = {
        length: 2,   // property
        breadth: 4,  // property

        // method to draw rectangle
        draw: function () {
            console.log("Drawing rectangle");
        },

        // method to calculate area
        area: function () {
            console.log(`Area of Rectangle: ${rectangle.length * rectangle.breadth}`);
        }
    };
    return rectangle; // return the object
}

// Create a rectangle object
let rectangle1 = createRectangle();

// Access properties
console.log(rectangle1.length);   // 2
console.log(rectangle1.breadth);  // 4

// Call methods
rectangle1.draw();  // Drawing rectangle
rectangle1.area();  // Area of Rectangle: 8
