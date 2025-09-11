// ------------------------------
// Getter and Setter in JavaScript
// ------------------------------

// Getters => allow us to access object properties like methods but use them as properties.
// Setters => allow us to modify object properties in a controlled way.

let person = {
    firstName: "Vikas",
    lastName: "Khurendra",

    // Getter method (called when accessing person.fullName)
    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    // Setter method (called when assigning to person.fullName)
    set fullName(value) {
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
};

console.log(person.fullName); // Uses getter → "Vikas Khurendra"

person.fullName = "Pankaj Tripathi"; // Uses setter → updates firstName & lastName

console.log(person.fullName); // Uses getter again → "Pankaj Tripathi"
