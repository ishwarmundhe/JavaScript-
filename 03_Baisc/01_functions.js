
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumber(num1, num2) { 
//     console.log( num1 + num2);
// }

// function addTwoNumber(num1, num2) { 
//     let num = num1 + num2;
//     return num
// }

function addTwoNumber(num1, num2) { 
   
    return num1 + num2
}
let result = addTwoNumber(4, 3)
// console.log(addTwoNumber(4, 3))
// console.log(`result: ${result}`);

function userMessage(userName = "xyz") { // if you never want to empty username 
    if (!userName) {
        console.log(`Enter user name `);
        return  // without return it not print 
    }
    return `${userName} just logged in`
}
// console.log(userMessage());
console.log(userMessage())


// --------------------------------------------------------------------------------- 


