// Operators 

let sum1 = 12;
let sum2 = 18;

// console.log(`${sum1} + ${sum2} = `,sum1 + sum2 );// 30
// console.log(`${sum1} - ${sum2} = `, sum1 - sum2);
// console.log(`${sum1} / ${sum2} = `, sum1 / sum2);
// console.log(`${sum1} * ${sum2} = `, sum1 * sum2);
// console.log(`${sum1} % ${sum2} = `, sum1 % sum2);

// // += and -= operator 
// let num = 10
// num += 1
// console.log(num);

// let num2 = 20
// console.log(num -= 3);

// Comparison Operator 

let num = '20'
if (num < 20) {
    // console.log("Number is less than 20");
} else if (num > 20) {
    // console.log("Number is greater than 20");
} else if (num === 20) {
} else if (num > 20 && num == 20) {
    // console.log("Number is greater than 20 and equal to 20");
} else {
    // console.log("Number is not less than 20, not greater than 20 and not equal to 20");
}


// Task 11: Using the && operator
let age = 25;
let hasDrivingLicense = true;

if (age >= 18 && hasDrivingLicense) {
    // console.log("You are eligible to drive.");
} else {
    // console.log("You are not eligible to drive.");
}

// Task 12: Using the || operator
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
    // console.log("You can relax today.");
} else {
    // console.log("It's a working day.");
}


// Task 13: Using the ! operator
let isRaining = 0; // true / false or 1/0

if (!isRaining) {
    // console.log("You don't need an umbrella.");
} else {
    // console.log("Take an umbrella with you.");
}


// Task 14: Using the ternary ? operator to check if a number is positive or negative
let number = 0;

let result = number >= 0 ? "The number is positive." : "The number is negative.";
let result2 = number == 0 ? "The number is Zero." : "The number is not a zero.";
// console.log(result);
// console.log(result2);


// Arithmetic Operations Script

// Define two numbers
let num1 = 10;
let num2 = 5;

// Perform basic arithmetic operations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

// Log the results to the console
console.log("Addition:", addition);         // 15
console.log("Subtraction:", subtraction);   // 5
console.log("Multiplication:", multiplication); // 50
console.log("Division:", division);         // 2
console.log("Remainder:", remainder);       // 0

// Comparison and Logical Operators Script

// Define two numbers
let a = 10;
let b = 20;

// Comparison operators
let isEqual = a == b;
let isNotEqual = a != b;
let isGreaterThan = a > b;
let isLessThan = a < b;
let isGreaterThanOrEqual = a >= b;
let isLessThanOrEqual = a <= b;

// Logical operators
let andCondition = a < b && a != b; // true AND true -> true
let orCondition = a > b || a == b;  // false OR false -> false
let notCondition = !(a == b);       // NOT false -> true

// Log the results to the console
console.log("Is Equal:", isEqual);                         // false
console.log("Is Not Equal:", isNotEqual);                  // true
console.log("Is Greater Than:", isGreaterThan);            // false
console.log("Is Less Than:", isLessThan);                  // true
console.log("Is Greater Than or Equal:", isGreaterThanOrEqual); // false
console.log("Is Less Than or Equal:", isLessThanOrEqual);  // true
console.log("AND Condition:", andCondition);               // true
console.log("OR Condition:", orCondition);                 // false
console.log("NOT Condition:", notCondition);               // true


// Ternary Operator Script

// Define a number
let number1 = -5;

// Use the ternary operator to determine if the number is positive or negative
let result1 = number1 >= 0 ? "The number is positive." : "The number is negative.";

// Log the result to the console
console.log(result1); // The number is negative.

