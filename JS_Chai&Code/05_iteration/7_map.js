const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const Num = myNumers.map(  (num) => num * 10)

const Num2 = myNumers
    .map((num) => num * 10)
    .map((num) => num + 2)

console.log(Num2)