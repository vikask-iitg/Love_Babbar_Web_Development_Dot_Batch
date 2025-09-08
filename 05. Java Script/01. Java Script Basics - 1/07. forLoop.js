// -------------------------------
// For Loop Example
// -------------------------------

let num = 10;

// loop from 1 to num (inclusive)
for (let i = 1; i <= num; i++) {
    // print "i * i = i²"
    console.log(`${i} * ${i} = ${i * i}`);

    // after every 10th number, print an empty line
    if (i % 10 === 0) console.log("\n");
}

/*
Output:
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
6 * 6 = 36
7 * 7 = 49
8 * 8 = 64
9 * 9 = 81
10 * 10 = 100
(blank line)
*/
