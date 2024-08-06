
function AP(a,d,n){

    let ap = [];
    for(let i=0; i<n; i++){
        let term = a + (i*d);
        ap.push(term);
    }
    return ap.join(',');
}

console.log("The A.P. is ",AP(1, 4, 10));

function nthTerm(a,d,n){
    let Term = a + (n - 1) * d;
    return Term;
}

console.log("nth term is" ,nthTerm(2,4,5));