const promise1 = new Promise(function (resolve , reject) {
    setTimeout(() => {
        console.log("Async promise 1 ");
        resolve();
    }, 1000);
})
promise1.then(()=>{
    console.log("Error : 404 - Promise 1");
})