// For Of

// for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.


// [{}, {}, {}]
// [" ", " ", " "]

const arr = [1, 2, 3, 4, 5] // num is iterator and arr - object
for (const num of arr) {
// console.log(num);    
}

const greet = "       hello world         "
for (const say of greet) {
    // console.log(say);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key ,value] of map) {
    // console.log(key ,':', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// object not define in for of -
