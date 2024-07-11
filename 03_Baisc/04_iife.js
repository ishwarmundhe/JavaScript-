// Immediately Invoked Function Expressions (IIFE)

//Normal 
// function chai() {
//     console.log("Hi Ishwaar");
// }
// chai()


//Named IFFE 
(function chai() {
    console.log("Hi Ishwaar");
})();  // Need to ; - as if not next iife is not run
    



// Arrow function IFFE
(() => {
    console.log("Hi Ishwaar");
}
)(); 




((name) => {
    console.log(` ${name} pe charcha`);
}
)('chai'); 
    

