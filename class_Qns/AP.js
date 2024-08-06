// problem statement - Arithematic propagation  solve - A sequence of numbers that has a 
//fixed common difference between any two consecutive numbers 
// a- 1st term , d-comm diff , n - n of terms 

function apSequence(a, d, n) {
    let sequence = [];

    for (let i = 0; i < n; i++){
        formula = a + (i * d)
        sequence[i] = formula
    }
    return sequence
}
console.log(`AP seq is :`,apSequence(1, 2, 4));


function nth_Term(a, d, n) {

    let term = a + (n - 1) * d
    return term
}
console.log(`nth term is :`,nth_Term(1, 2, 4));
