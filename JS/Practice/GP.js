
function GP(a,r,n){
    let power = 1;

    for(let i=0; i<n-1; i++){
        power*=r;
    }
    return a*power;
}

function PrintGP(a,r,n){
    let result= [];
    let term = a;
    for(let i=0; i<n; i++){
        result.push(term);
        term*=r;
    }
   return result.join(',');
}
console.log("The G.P. Sequence is ", PrintGP(1, 3, 5));

console.log("The nth term in the G.P. is ", GP(1,3,5));