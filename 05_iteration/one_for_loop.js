// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0; i < 10; i++) {
    // console.log(i);    
}

for (let i = 0; i <=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log(` ${i} Is a best number in table`);
        // console.log(` ${i} is a given no by user`);
        break;
    }
    // console.log(i);
}


for (let i = 1; i < 10; i++) {
    
    // console.log(`outer element of loop ${i}`);
    for (let j = 1; j < 5; j++) {
    
        // console.log(`inner element of loop ${j} and outer loop is ${i}`);
    
    }
    
}


// asending order star patten
let star = 10

for (let i = 0; i < star; i++) {
    let starRow = ``;
    for (let j = 0; j < i; j++) {
     starRow += `@` 
    
    }
    // console.log(starRow);
}

// star patten 




// for (let i = rows; i > 0; i--) {
//     let starRow = '';
//     for (let j = 0; j < i; j++) {
//       starRow += '*';
//     }
//     console.log(starRow);
//   }

// patten 
let star1 = 10

for (let i = star1; i > 0; i--) { 
    let starRow = ``;
    for (let j = 0; j < i; j++) {
     starRow += `@` 
    
    }
    console.log(starRow);
}

// table 1-10 
for (let i = 1; i < 10; i++) {
    
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} =`, i * j);
        //  console.log(i + '*' + j + ' = ' + i*j );
       
       }
    
}

//array in loop 
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}

