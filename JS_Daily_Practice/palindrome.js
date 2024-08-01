// // palindrome problem 

// function palindrome(str) {
    
//     const clearStr = str.toLowerCase();
    
//     const reverseStr = clearStr.split('').reverse().join('');
//     // node - len and length 

//     return clearStr === reverseStr;
// }

// const testString = "ABCDCBA";
// console.log(palindrome(testString));



// // Reverse the string

// function reverse(str) {
//     const clearStr = str.toLowerCase().split('').reverse().join('');
//     return clearStr
// }
// const testString2 = "ISHWAR";
// console.log(reverse(testString2));


// string - " 1+ 2"
// stack 
//
// recursion - factorial fn 
// ath proj 
// geo proj 
// age calculator - birth time 
//


// String representation

// console.log(( "1 - 2"))



let str = "11+21";
let value;

for (let i = 0; i < str.length; i++) {
    if (str[i] == '*') {
        value = (str[i - 1] - '0') * (str[i + 1] - '0');
    } else if (str[i] == '-') {
        value = (str[i - 1] - '0') - (str[i + 1] - '0');
    } else if (str[i] == '/') {
        value = (str[i - 1] - '0') / (str[i + 1] - '0');
    } else if (str[i] == '+') {
        value = (str[i - 1] - '0') + (str[i + 1] - '0');
    }
}

console.log(value);






console.log('0' - 1);




function charToNumber(char) {
    return char.charCodeAt(0) - '0'.charCodeAt(0);
}

function stringToNumberStack(str, start, end) {
    let number = 0;
    for (let i = start; i < end; i++) {
        number = number * 10 + charToNumber(str[i]);
    }
    return number;
}

function evaluateExpression(str) {
    let operatorIndex = -1;
    let operator;
    
    // Loop through the string to find the operator
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/') {
            operatorIndex = i;
            operator = str[i];
            break;
        }
    }

    if (operatorIndex === -1) {
        return null; // No operator found
    }

    // Extract the numbers using a stack approach
    const num1 = stringToNumberStack(str, 0, operatorIndex);
    const num2 = stringToNumberStack(str, operatorIndex + 1, str.length);

    let value;

    // Perform the operation based on the operator found
    switch (operator) {
        case '+':
            value = num1 + num2;
            break;
        case '-':
            value = num1 - num2;
            break;
        case '*':
            value = num1 * num2;
            break;
        case '/':
            value = num1 / num2;
            break;
        default:
            value = null;
            break;
    }

    return value;
}

// Example usage
const str1 = "11111+21";
const str2 = "33-12";
const str3 = "15*2";
const str4 = "50/2";

console.log(evaluateExpression(str1)); // Output: 32
console.log(evaluateExpression(str2)); // Output: 21
console.log(evaluateExpression(str3)); // Output: 30
console.log(evaluateExpression(str4)); // Output: 25
