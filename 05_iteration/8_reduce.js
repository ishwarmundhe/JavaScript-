const myNums = [1, 2, 3]

//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element

const total = myNums.reduce(function (sum, element) { 
    console.log(`sum is ${sum} and element is ${element}`);
    return sum + element;
},0)
console.log(total);
 

//Main way to write 

const total2 = myNums.reduce((sum, element) => sum + element, 0)
console.log(total2);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce((sum, item) => sum + item.price, 0)
console.log(totalPrice);