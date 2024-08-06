

function ReverseString(str){

    let arr = str.split('');
    var len = arr.length;
    
    var i=0;
    let temp;
    for(i; i<len/2; i++){
        temp = arr[i];
        arr[i] = arr[len-1-i];
        arr[len-1-i] = temp;
    }
    return arr.join('');
}

let str1 = "Onkar";
let str2 = "HELLO";

console.log(ReverseString(str2));