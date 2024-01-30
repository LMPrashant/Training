function add(...args){
    let total = 0;
    for (const a of args){
        total += a;
    }
    return total;
}

let result = add(2,3,4);
console.log(result);

let res = add(3,4,5,6);
console.log(res);