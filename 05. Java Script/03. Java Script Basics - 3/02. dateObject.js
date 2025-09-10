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

date = new Date("2003-04-16T10:42:25+05:30"); // ISO format with time & timezone


// #2 - Formatting Date
console.log(date.toString());         // Full string
console.log(date.toDateString());     // Only date
console.log(date.toTimeString());     // Only time
console.log(date.toISOString());      // ISO format (UTC)
console.log(date.toUTCString());      // UTC format
console.log(date.toJSON());           // JSON format (same as ISO)
console.log(date.toLocaleString());   // Local date & time
console.log(date.toLocaleDateString());// Local date only
console.log(date.toLocaleTimeString());// Local time only


// #3 - Get Methods
console.log(date.getFullYear());  // Year
console.log(date.getDay());       // Day of week (0=Sunday, 6=Saturday)
console.log(date.getMonth());     // Month (0=Jan, 11=Dec)
console.log(date.getHours());     // Hours (0-23)
console.log(date.getMinutes());   // Minutes
console.log(date.getSeconds());   // Seconds


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
