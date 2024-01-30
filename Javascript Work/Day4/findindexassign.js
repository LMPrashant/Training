number = [1,3,5,7]

let findindex = (x,...args) =>{
    return args
    .findIndex((a) => a == x )
}

let index = (x,...args) =>{
    return args
    .findIndex((a,b) => a==x && b < 3 )
}

let res = findindex(5,...number);
console.log(res);

let result = index(3,...number);
console.log(result);