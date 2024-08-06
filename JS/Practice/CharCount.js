

function CharCount(str){

    let len = str.length;
    if(len === 0) return '';
    let result = '';
    let cnt = 1;
    for(let i=1; i<len; i++){
       
            if(str[i]==str[i-1]){
                cnt++;
            }
            else{
               result += str[i-1] + cnt;
                cnt =  1;
            }
    }
    result += str[len - 1] + cnt;
    return result;
}

console.log(CharCount("aaabbbbcdddd"));