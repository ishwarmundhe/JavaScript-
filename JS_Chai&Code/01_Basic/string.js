const Name = "Ishwar "
const age = 20 

// console.log(Name + age + "this is age");

console.log(`This is user name :  ${Name} and age is : ${age} .`);
// `` - do practice to write in this in string


const gameName = new String("Ishwar");

console.log(gameName);
console.log(gameName.italics);
// Go through all the prototypes of strings 
//

 console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));



const aName = "Ishwar";
console.log(aName.charAt(0));
 