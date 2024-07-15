// Control Structure 

let Number = +20
if (Number > 0) {
    // console.log("Number is positive");
} else if (Number < 0) {
    //  console.log("Number is negative");
} else {
    // console.log("Number is zero");
}

// Vote 

let age = 19
if (age >= 18) {
    // console.log("You can vote");
} else {
    // console.log("You are not eligible to vote");
}

// Largest of 3 Number 

let Num1 = 1
let Num2 = 2
let Num3 = 3

if (Num1 < Num2) {
    if (Num2 < Num3) {
        // console.log("Largest Number is", Num3);
    } else {
        // console.log("Largest Number is", Num2);
    }
} else {
    if (Num1 < Num3) {
        // console.log("Largest Number is", Num3);
    } else {
        // console.log("Largest Number is", Num1);
    }

}


// Switch Case 

// let day = 4

// switch (day) {
//         // case 1: console.log("Sunday");
//         break;
//         // case 2: console.log("Monday");
//         break;
//         // case 3: console.log("Tuesday");
//         break;
//         // case 4: console.log("Wednesday");
//         break;
//         // case 5: console.log("thursday");
//         break;
//         // case 6: console.log("friday");
//         break;
//         // case 7: console.log("Saturday");
//         break;
//         // default : console.log(`enter correct detail`);
//         break;
// }


// Grade 
let score = 85;
let grade;

if (score >= 90) {
    grade = 'A';
} else if (score >= 80) {
    grade = 'B';
} else if (score >= 70) {
    grade = 'C';
} else if (score >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}

switch (grade) {
    case 'A':
        // console.log('You get an A - Grade');
        break;
    case 'B':
        // console.log('You get a B - Grade');
        break;
    case 'C':
        // console.log('You get a C - Grade');
        break;
    case 'D':
        // console.log('You get a D - Grade');
        break;
    case 'F':
        // console.log('You get an F - Grade');
        break;
    default:
        // console.log('Invalid score');
}


// Teternary Operator 

let Num = 1
// let result = (Num % 2 == 0) ? `${Num} is Even` : `${Num} is Odd`
// console.log(result);


// Leap Year 

function LeapYear(year) {
    if ((year % 4 == 0) && (year % 100 !== 0) || year % 400 == 0){
        return true;
    }else{
        return false;
    }
}

let year = 2028;
let result = LeapYear(year) ? `${year} is a Leap Year` : `${year} is not a Leap Year`

console.log(result);