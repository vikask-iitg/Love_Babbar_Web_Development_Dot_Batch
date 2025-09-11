// ------------------------------
// Try, Catch, and Finally in JavaScript
// ------------------------------

// Used for handling errors gracefully. 
// 'try' block → code that may throw an error.
// 'catch' block → handles the error without stopping program execution.
// 'finally' block → always runs (cleanup, logging, etc.)

let person = {
    firstName: "Vikas",
    lastName: "Khurendra",

    // Getter (called when accessing person.fullName)
    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    // Setter (called when assigning to person.fullName)
    set fullName(value) {
        if (typeof value !== "string") {
            throw "You must pass a string"; // Throw error if not a string
        }
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
};

console.log(person.fullName); // "Vikas Khurendra"

person.fullName = "Manoj Bajpai"; // Valid string → works
console.log(person.fullName);     // "Manoj Bajpai"

try {
    person.fullName = 12345; // Invalid → will throw error
}
catch (e) {
    console.error("Error:", e); // Handle the error
}
finally {
    console.log("➡️ Finally block executed. FullName is:", person.fullName);
}

