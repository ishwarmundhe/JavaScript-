
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


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));