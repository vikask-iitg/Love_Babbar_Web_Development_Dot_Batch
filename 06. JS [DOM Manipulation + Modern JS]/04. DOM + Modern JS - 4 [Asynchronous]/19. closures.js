// ------------------------------
// Closure with Same Variable Names
// ------------------------------

function outer() {
    var city = "Delhi";    // function-scoped (outer scope)
    let age = 25;          // block-scoped (outer scope)
    const name = "Vikas";  // block-scoped constant (outer scope)

    function inner() {
        // "inner" can access outer variables:
        console.log("Outer city:", city);
        console.log("Outer age:", age);
        console.log("Outer name:", name);

        // Shadowing: redeclare variables with SAME names in inner scope
        var city = "Mumbai";   // this "city" shadows the outer var
        let age = 30;          // this "age" shadows the outer let
        const name = "Kumar";  // this "name" shadows the outer const

        console.log("Inner city:", city);
        console.log("Inner age:", age);
        console.log("Inner name:", name);
    }

    return inner;
}

const demo = outer();
demo();

/*
Output:
Outer city: undefined   <-- because "var city" is hoisted in inner() (shadowing outer one)
Outer age: Error        <-- Cannot access 'age' before initialization
Outer name: Error       <-- Cannot access 'name' before initialization
Inner city: Mumbai
Inner age: 30
Inner name: Kumar
*/
