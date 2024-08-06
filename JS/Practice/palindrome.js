function palindrome(str){
    str = str.toLowerCase();
    let len = str.length;
    
    let i = 0;
    let j = len-1;
    while(i<j){
        if(str[i]==str[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
}

let str1 = "aba";
let str2 = "ABa"
console.log(palindrome(str2));