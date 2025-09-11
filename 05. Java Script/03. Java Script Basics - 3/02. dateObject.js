// -------------------------------
// Date Object in JavaScript
// -------------------------------

// #1 - Creating Date objects

let date = Date(); // Returns current date & time as a STRING
console.log(date);

date = new Date(); // Returns current date & time as a Date OBJECT
console.log(date);

date = new Date(10); // 10 ms after Jan 1, 1970 (Epoch time)
console.log(date);

date = new Date(2003, 3, 16); // Year, Month (0-based), Day
console.log(date); // April 16, 2003

date = new Date("2003-04-16"); // Date from string (YYYY-MM-DD)
console.log(date);

// Example date
let date1 = new Date("2003-04-16T11:55:21Z");

// #2 - Formatting Date
console.log("Full string:", date1.toString());               // Full string
console.log("Only date:", date1.toDateString());             // Only date
console.log("Only time:", date1.toTimeString());             // Only time
console.log("ISO format (UTC):", date1.toISOString());       // ISO format (UTC)
console.log("UTC format:", date1.toUTCString());             // UTC format
console.log("JSON format:", date1.toJSON());                 // JSON format (same as ISO)
console.log("Local date & time:", date1.toLocaleString());   // Local date & time
console.log("Local date only:", date1.toLocaleDateString()); // Local date only
console.log("Local time only:", date1.toLocaleTimeString()); // Local time only


// #3 - Get Methods
console.log("Year:", date1.getFullYear());       // Year
console.log("Day of week (0=Sun):", date1.getDay()); // Day of week (0=Sunday, 6=Saturday)
console.log("Month (0=Jan):", date1.getMonth());     // Month (0=Jan, 11=Dec)
console.log("Hours (0-23):", date1.getHours());      // Hours (0-23)
console.log("Minutes:", date1.getMinutes());         // Minutes
console.log("Seconds:", date1.getSeconds());         // Seconds



// #4 - Set Methods
let birthday = new Date();
console.log(birthday);

birthday.setFullYear(2003); // Change year
console.log(birthday);

birthday.setMonth(11); // Change month (0=Jan, 11=Dec)
console.log(birthday);

birthday.setDate(22); // Change day
console.log(birthday);

// Example birthday date
date = new Date(2003, 3, 16);
console.log(date);
