// Loops Problems 


for (let i = 0; i <= 10; i++) {
    // console.log(i);

}

// Multiplication of table 5

let myArr = 5
for (let i = 0; i <= 10; i++) {
    // console.log(`${myArr} * ${i} =` ,myArr * i  );

}

// Sum of number 1-10 using while loop

let sum = 0
let i = 1
while (i <= 10) {
    sum += i
    i++
    // console.log(sum);
}


// Print number form 10 to 1 using while loop


let num = 10
while (num >= 1) {
    // console.log(num);
    num--

}

//Do - While Loop 

let number = 1
do {
    // console.log(number);
    number++
} while (number < +10)


do {
    // console.log(number * 5);
    number--
} while (number >= 1)



// Factor of number using Do while 

function calculateFactorial1(calculate) {
    let factorial = 1;
    let i = 1;
    do {
        factorial *= i;
        i++;
    } while (i <= calculate)
    return factorial;
}
// let num2 = 5;
// let result1 = calculateFactorial1(num2);
// console.log(result1);


// Patten Problem 
let num1 = 5
for (let i = 0; i <= num1; i++) {
    let patten = '';
    for (let j = 0; j <= i; j++) {
        patten += "*";
        
    }console.log(patten);

}

// 

// function printPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let pattern = '';
//         for (let j = 1; j <= i; j++) {
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
// }

// // Example usage:
// const n = 5;
// printPattern(n);

console.log("Printing numbers from 1 to 10, skipping number 5:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip number 5
    }
    console.log(i);
}


console.log("Printing numbers from 1 to 10, stopping loop at number 7:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7) {
        break; // Stop the loop when i equals 7
    }
}
