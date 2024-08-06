// const promise1 = new Promise(function (resolve , reject) {
//     setTimeout(() => {
//         console.log("Async promise 1 ");
//         resolve();
//     }, 1000);
// })
// promise1.then(()=>{
//     console.log("Error : 404 - Promise 1");
// })
// // --- 

// const promise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
       
//         resolve({username : "Ishwar" , password : "1234"})
//     },1000);

// })
// promise3.then((Error) => {
//         console.log(Error)
// })
    

// const promise4 = new Promise(function (resolve, reject) { 
//     setTimeout(() => {
       
//         let Error = false
//     if (!Error) {
//         resolve({username : "Ish" , password : "1234"})
//     } else {
//         reject("Error : Promise four")
//     }
//    },1000)
// })
// promise4.then((user) => {
//     console.log(user)
//     return user.username;
// }).then((username) => { 
//     console.log(username)
// }).catch((Error) => {
//     console.log(Error)
// }).finally(()=> console.log(" Promise is succesed or fail but get response ")
// )



// const promise5 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({username : "CHAI", password:"Biscuit"})
//         } else {
//             reject("E : error is promise failed")
//         }
//     }, 1000)
// })
// promise5
//     .then((user) => {
//     console.log(user)
//     return user.username
//     })
//     .then((username) => {
//     console.log(username)
//     })
//     .catch((error) => { 
//         console.log(error)
//     })
//     .finally((done) => { 
//         console.log("Finally ");
//     })
    



const promise5 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "CHAI", password: "Biscuit" })
        } else {
            reject("E : error is promise failed")
        }
    }, 1000)
});
// async function asyncPromise5() {
//     try {
//         const respones = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         const data = await respones.json();
//         console.log(data);
//     } catch(error) {
//         console.log(error);
//     }
// }
// asyncPromise5();

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => {
//     return response.json();
//     }).then((data) => {
//     console.log(data);
//     }).catch((error) => { 
//         console.log(error);
//     })



