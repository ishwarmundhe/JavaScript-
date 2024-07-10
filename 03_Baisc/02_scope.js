function myFunction() {
  
    var pizzaName = "Margarita";
    // Code here can use pizzaName
    // console.log(pizzaName);
}
//   console.log(pizzaName);
  
// Code here can't use pizzaName ------------------------------------
  
// const isLoggedIn = true;

// if (isLoggedIn == true) {
//    const statusMessage = 'Logged in.';
// }

// // Uncaught ReferenceError...
// console.log(statusMessage);

// Code here can't use const statusMessage ------------------------------------

for (let i = 0; i < 3; i++) {
    // This is the Max Scope for 'let'
    // i accessible ✔️
  }
  // i not accessible ❌
  
  
  for (var i = 0; i < 3; i++) {
    // i accessible ✔️
  }
// i accessible ✔️ ----------------------------------------------------------------


// Prints 3 thrice, not what we meant.
// for (var i = 0; i < 3; i++) {
//     setTimeout(_ => console.log(i), 10);
// }
//   // Prints 0, 1 and 2, as expected.
// for (let i = 0; i < 3; i++) { 
//     setTimeout(_ => console.log(i), 10);
// }
  
//----------------------- ------------------------------------------------------



// let a = 10;
// const b = 20;
// var c = 30; 

if (true) {
//   let a = 10;
// const b = 20;
var c = 30; 
}

// console.log(a);
// console.log(b);
// console.log(c);
  

// get example of icecream as - Big not get from small but small get from big as : local variable can access from global but global cannot access from local.
// local --> global , global -->/ local
function one() {
  
 const username = "Ishwar"

  function two() {
    const website = "youtube"
    // console.log(website);
    console.log(username);
    
  }//  console.log(website); cannot possible 
 
  two()
}
one()

// ++++++++++++++++++ interesting ++++++++++++++++++


if (true) {
  const username = "hitesh"
  if (username === "hitesh") {
      const website = " youtube"
      console.log(username + website);
  }
  // console.log(website);
}

// console.log(username);

// two ways to write a function and different between it 

addOne()  // it can call before and after functions also
function addOne(num) {
  return num + 1
}
addOne()


// but in "Expression" this it only call after function as : reason is in this you declare and hold function 
addTwo(5)
const addTwo = function (num) {
  return num + 2
}
// addTwo(5)
