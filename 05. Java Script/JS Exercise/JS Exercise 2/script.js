// Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

// function greet(name)
// {
//     console.log(`Hello ${name}`);
// }

// greet('Vikas');

// Write a function called 'getSquare' that takes a number parameter and returns its square.

// function getSquare(num)
// {
//     // const square = num * num;
//     const square = num ** 2;
//     return square;
// }

// console.log(getSquare(5));

// Write a function called 'countLetters' that takes a string parameter and returns an
// object that contains a count of each letter in the string.


// function countLetters(str)
// {
//     const counts = {};
//     for(let i=0; i< str.length; i++)
//     {
//         const char = str[i];
//         if(counts[char])
//         {
//             counts[char]++;
//         }
//         else
//         {
//             counts[char] = 1;
//         }
//     }
//     return counts;
// }

// const letterCounts = countLetters("Once upon a time in mumbai");
// console.log(letterCounts);


// Write a function called 'createCounter' that returns a function. The returned function should 
// increment a counter variable each time it is called and return the current count.

// A closure is when an inner function “remembers” and can access variables from its outer function, 
// even after that outer function has finished executing.

// function createCounter()
// {
//     let count = 0;

//     return function()
//     {
//         count++;
//         return count;
//     }
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// Write a function called 'sumEvenNumbers' that takes an array of numbers as a 
// parameter and returns the sum of all even numbers in the array.


// function sumEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             console.log(arr[i]);
//             sum = sum + arr[i];
//         }
//     }
//     return sum;
// }

// let arr = [2, 3, 5, 7, 4, 5, 8, 2, 9, 10, 13, 15, 17, 18];

// console.log(`sum : ${sumEvenNumbers(arr)}`);

// Write a function that takes an array of numbers as an argument and 
// returns the sum of all the numbers in the array.

// function sumOfNumber(num)
// {
//     let sum = 0;
//     for(let i=0; i<num.length; i++)
//     {
//         sum += num[i];
//     }
//     return sum;
// }

// let arr = [2, 3, 5, 7, 4, 5, 8, 2, 11, 10, 13, 15, 17, 18];
// console.log(`sum : ${sumOfNumber(arr)}`);

// Write a function that takes an array of strings as an argument 
// and returns a new array with only the strings that have a length 
// greater than 5.


// function strGreaterThanFive(arr) {
//     let ans = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > 5) {
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }

// const arr = ['Vikas', 'Rajesh', 'Bikrant', 'Agarkar', 'Khurendra', 'Jai', 'Manish'];
// console.log(strGreaterThanFive(arr));


// Write a function that takes an object and returns an array of all 
// the keys in the object.

// function printKeys(obj)
// {
//     const keys = Object.keys(obj);
//     return keys;
// }

// const person = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     city: "New York"
// };

// console.log(printKeys(person));

// Write a function that takes an array of objects and 
// returns an array of all the values of a specified property name.

// function getPropertyValues(arr, propName){
//     const values = arr.map((obj) => obj[propName]);
//     return values;
// }

// const people = [
//     {name: "Vikas", age:29, gender: "male"},
//     {name: "Tanya", age:32, gender: "female"},
//     {name: "Bikrant", age:30, gender: "male"}
// ];

// console.log(getPropertyValues(people, "name"));
// console.log(getPropertyValues(people, "age"));
// console.log(getPropertyValues(people, "gender"));
// console.log(getPropertyValues(people, "address"));

// Write a function that takes an array of objects 
// and returns the object with the highest value for a specified property name.

// function maxPriceValue(arr, prop) {
//     if (arr.length === 0) {
//         return null;
//     }

//     let maxObj = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i][prop] > maxObj[prop]) {
//             maxObj = arr[i];
//         }
//     }
//     return maxObj;
// }

// const arr = [
//     { name: "Apple", price: 10 },
//     { name: "Banana", price: 60 },
//     { name: "Orange", price: 30 }
// ];

// console.log(maxPriceValue(arr, "price"));
