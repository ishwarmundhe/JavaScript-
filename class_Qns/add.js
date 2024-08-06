



//([+\-*/])
function solution(exp) {
    let number = exp.split(/([-])/);
    // let number = '+'
    let result = 0;
    let currentNum = 0;
    let currentOperator = '+';

    for (let num of number) {
        if (!isNaN(num)) { 
            currentNum = Number(num);
        
            switch (currentOperator) {
                case '+':
                    result += currentNum;
                    break;
                    case '-':
                        result -=currentNum;
                    break;
                    case '*':
                        result *= currentNum;
                    break;
                    case '/':
                        result /= currentNum;
                    break;
        }
        } else {
            currentOperator = num;
    }

    }
    return result;
}

let expression = '1-2  -29'
const operation = solution(expression);
console.log(operation);