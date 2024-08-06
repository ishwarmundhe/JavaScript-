function remainingBrackets(str) {
    let arr = [];
    
    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            arr.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (arr.length === 0) {
                arr.push(char);
            } else {
                let top = arr.pop();
                
                if ((char === ')' && top !== '(') ||
                    (char === '}' && top !== '{') ||
                    (char === ']' && top !== '[')) {
                }
            }
        }
    }
    if (arr.length === 0) return true;
    else{
        return false;
    }
}
       
console.log(remainingBrackets("((()))"));
