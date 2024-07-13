// For Each 

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item) => {
//     // console.log(item);
// })

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
}) // to give all data and call like this also 



const code = [{
    langName: "java",
    langSymbol :"java"
}, {
    langName: "JavaScript",
    langSymbol :"js"
}, {
    langName: "CPP",
    langSymbol :"'c++'"
}
]

code.forEach((item) => {
    console.log(item.langName);
})
