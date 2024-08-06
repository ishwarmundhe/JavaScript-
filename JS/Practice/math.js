
function power(base, exponent){
    if(exponent == 0) return 1;
    if(exponent < 0) return 1;

    let result =1;
    for(let i=0; i<exponent; i++){
        result *= base;
    }
    return result;
}

function maximum(...numbers){
    let len = numbers.length;
    if(len==1) return numbers[0];
    let maxi = numbers[0];

    for(let i=1; i<len; i++){
        if(numbers[i]>maxi){
            maxi = numbers[i];
        }
    }
    return maxi;
}

function minimum(...numbers){
    let len = numbers.length;
    if(len==1) return numbers[0];
    let mini = numbers[0];

    for(let i=0; i<len; i++){
        if(numbers[i]<mini){
            mini = numbers[i];
        }
    }
    return mini;
}

function absolute(x){
    return (x<0) ? -x : x;
}

console.log("Power is ", power(2,3));
console.log("Maximum Number is ", maximum(5,1,2,3,10));
console.log("Minimum Number is ", minimum(25,30,10,5,1,0));
console.log("Absolute Value is ", absolute(255));