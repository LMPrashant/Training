function emi(p,r=9,n){
    console.log(r)
    var amt = p*r*n / 100;
    var res = p*r * (1+r)*Math.pow(n)
    console.log(amt);
    console.log(res);

}

emi(10000,undefined,24);
