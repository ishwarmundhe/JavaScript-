// singleton
// Object.create

// object literals


const userKey = Symbol("Key"); // Need to define key before add it into an Object

const JSUser = {
    name: "Ishwar",
    age: 21,
    location: "Pune",
    email: "ishwar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    userKey1: "Key2",
    [userKey] : "@123" // [-- ] is way to write a key to get Symbol Datatype [Symbol(Key)]: 'Key'
    
}
// console.log(JSUser);
// console.log(typeof JSUser.userKey);

console.log(JSUser.name);  // Common way to declare but if "Full Name " : "Ishwar" - Then have to declare JSUser["name"];

// console.log(JSUser["email"]); // More apporate way to declare Obj 

// Adding item in Object 

JSUser.email = "ishwar@google.com";
// Object.freeze(JSUser); // it lock object and after this command no changes happen in object 
// delete JSUser.email; // USed to delete element in Obj 
// JSUser.email = "ishwar@blank.com";
console.log(JSUser);

// Function 

JSUser.greeting = function(){
    console.log(`Hello ${this.name} , Welcome to your site !
Your last login days are ${this.lastLoginDays.join(", ")},
Your Access Key is "${this[userKey]}" make sure to not share with anyone!
I hope you have a nice day!`);
}


console.log(JSUser.greeting); // [Function (anonymous)] 
console.log(JSUser.greeting()); 



                                                                                        