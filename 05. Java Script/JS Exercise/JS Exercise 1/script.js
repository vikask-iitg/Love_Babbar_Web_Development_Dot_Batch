// Write a function that takes two numbers as arguments and returns their sum.

// function sumNumbers(num1, num2){
//     const sum = num1 + num2;
//     return sum;
// }

// console.log(sumNumbers(2, 6));

// Write a function that takes a string as an argument and returns its length.

// function getStringLength(str){
//     const length = str.length;
//     return length;
// }

// console.log(getStringLength("Once upon a time in mumbai"));

// Write a program that takes two numbers and displays their sum, difference, product, and quotient.

// function arithmeticOperation(num1, num2)
// {
//     const sum = num1 + num2;
//     const diff = num2 - num1;
//     const product = num1 * num2;
//     const quotient = num1 % num2;

//     console.log(`Sum = ${sum}`);
//     console.log(`Difference = ${diff}`);
//     console.log(`Product = ${product}`);
//     console.log(`Quotient = ${quotient}`);
    
// }

// arithmeticOperation(6, 7);

// Write a function that takes two numbers as arguments and returns the larger number.

// function largerNum(num1, num2)
// {
//     const large = Math.max(num1, num2);
//     return large;
// }

// console.log(`Large Number is: ${largerNum(4,6)}`);

// Write a program that displays a string in reverse order.

// function revString(str)
// {
//     const reversedStr = str.split("").reverse().join("");
//     return reversedStr;
// }

// const originalStr = "CodeHelp";
// console.log(revString(originalStr));


// Write a program that takes a number and checks whether it is positive, negative, or zero.

// function numCheck(num1)
// {
//     if(num1 > 0) return "positive";
//     else if(num1 < 0) return "negative";
//     else return "zero";
// }

// console.log(numCheck(0));

// Write a program that takes a number and prints the multiplication table for that number.

// function table(num1){
//     for(let i=1; i<=10; i++)
//     {
//         console.log(`${num1} x ${i} = ${num1 * i}`);
//     }
// }

// table(5);


// Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

// function sumToN(num)
// {
//     let sum = 0;
//     for(let i=1; i<=num; i++)
//     {
//         sum += i;
//     }
//     console.log(sum);
// }

// sumToN(5);

// Write a program that takes a string and prints out the number of vowels in the string.

// function findVowels(str)
// {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for(let i=0; i<str.length; i++)
//     {
//         if(vowels.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }
 
// console.log(findVowels("JavaScript is scripting language"));

// Find intersection of two arrays

// function interSection(arr1, arr2)
// {
//     let commonElements = [];
//     for(let i=0; i< arr1.length; i++)
//     {
//         if(arr2.includes(arr1[i]))
//         {
//             if(!commonElements.includes(arr1[i]))
//             {
//                 commonElements.push(arr1[i]);
//             }
//         }
//     }

//     commonElements.sort((a,b) => a-b);
//     return commonElements;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// const commonElements = interSection(arr1, arr2);
// console.log(commonElements);
