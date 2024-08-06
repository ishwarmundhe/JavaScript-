function ap_seq(a, n, d) {
    let currentTerm = a;
    for (let i = 0; i < n; i++) {
        console.log(currentTerm);
        currentTerm += d;
    }
}

function ap_nth(a, d, n) {
    return a + (n - 1) * d;
}

let a = 4;
let d = 4;
let n = 9;

console.log("AP Sequence:");
ap_seq(a, n, d);

console.log("Nth term: " + ap_nth(a, d, n));
