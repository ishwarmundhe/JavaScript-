const myArr = [0, 1, 2, 3, 4, 5];

// console.log("A:",myArr);
// console.log(myArr[2]);

// Array Methods 

// myArr.push(9);
// myArr.pop();
// console.log("B:",myArr);

// myArr.unshift(9); // form Start adding element to array
// myArr.shift();    // form End adding element to array

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(3));
// console.log("C :", myArr);


// Slice and Splice Methods 
console.log("A :", myArr);

const ar1 = myArr.slice(1, 3);
const ar2 = myArr.splice(1, 3);


console.log("B :", ar1);
console.log("C :", ar2);
console.log("D :", myArr);
// In Slice it slice (1,3 as form 1 to 2 and neglite 3 ) as it copy it.
// In Splice (1,3) shows [1,2,3] and the myArr changes as [0,4,5]
// So main difference between slice and splice is that in slice arry is copy and shown as in splice it cut from original array.



