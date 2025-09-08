// -------------------------------
// Switch Case Example
// -------------------------------

let weekNumber = 4;

switch (weekNumber) {
    case 1:
        console.log("Monday");
        break;  // exit switch after this case

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;  // ✅ Added break to prevent fall-through

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid"); // if no case matches
}
// Output (for weekNumber = 4): Thursday
