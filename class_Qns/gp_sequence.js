function gp_seq(a, r, n) {
    let currentTerm = a;
    for (let i = 0; i < n; i++) {
        console.log(currentTerm);
        currentTerm *= r;
    }
}

function gp(a, r, n) {
    return a * (r ** (n - 1));
}

let a = 4;
let r = 2;
let n = 7;

console.log("GP Sequence:");
gp_seq(a, r, n);

console.log("Nth term of GP: " + gp(a, r, n));
