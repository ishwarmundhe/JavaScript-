// this key word and it use in Object and Not in Functons 

const user = {
    username : "ishwar",
    price : 999,
    welcomeMessage : function () {
        console.log(`Hello ${this.username} , Welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Ayushi"
// user.welcomeMessage()

// console.log(this); // {} - as it only use under the bracket 


// function chai() {
//     let username = "Ishwar"
//     console.log(this.username);
// }
// chai() // undefined

// const chai = function () {
//     let username = "Ishwar"
//     console.log(this.username);
// }
// chai()

// arrow () => {} , () => ()

const chai = () => {
    let username = "Ishwar"
    console.log(this.username);
}
chai()

// 1st way to write arrow 
const add = (num1, num2) => {
    return num1 + num2;
}
console.log(add(2, 3)); 


//2nd way to write arrow 

const addNum = (num1, num2) => (num1 + num2)
console.log(addNum(4, 2));


const name = (num1 ,num2) => ({ username: "Ishwar" })
console.log(name(2, 3));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()