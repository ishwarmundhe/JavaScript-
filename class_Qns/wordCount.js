function compressString(s) {

    if (s.length === 0) return '';
    let result = [];
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        }
        else {
            result.push(s[i - 1] + count);
            count = 1;
        }
    }
    result.push(s[s.length - 1] + count);
    return result.join('');

}
console.log(compressString("aaaaaabbbd"));

