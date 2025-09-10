// -------------------------------
// Array Insertion in JavaScript
// -------------------------------

let arr = [1, 2, 4, 6, 9];
console.log(arr);  // [1, 2, 4, 6, 9]

// #1 - Insert at beginning (unshift)
arr.unshift(10);   // adds element at start
console.log(arr);  // [10, 1, 2, 4, 6, 9]

// #2 - Insert at end (push)
arr.push(8);       // adds element at end
console.log(arr);  // [10, 1, 2, 4, 6, 9, 8]

// #3 - Insert at middle (splice)
// splice(startIndex, deleteCount, itemToInsert)
// Here: startIndex=3, deleteCount=0, insert=100
arr.splice(3, 0, 100);
console.log(arr);  // [10, 1, 2, 100, 4, 6, 9, 8]
