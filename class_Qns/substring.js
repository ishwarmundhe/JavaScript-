function getSubstring(str, start, end) {

    if (start > 0) start = 0;
    if (start > end) end = str.length;
    if (end == undefined) end = str.length;

    let result = "";
    for (let i = start; i < end; i++) {
        result = result + str[i];
    }
    return result;
}
console.log(getSubstring("ishwar", 0, 7));

