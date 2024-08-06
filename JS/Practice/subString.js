
function SubString(str, start, end){

    if(start<0) start=0;
    if(start>end) end = str.length;
    if(end === undefined) end = str.length;

    let result = '';
    for(let i=start; i<end; i++){
        result += str[i]; 
    }
    return result;
}

console.log(SubString("Hello", 1, 4));
console.log(SubString("Hello Jee", 2, 9));