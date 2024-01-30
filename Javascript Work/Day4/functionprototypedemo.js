/* function add(x,y,z){
    return x + y + z;
} */

/* console.log(add.prototype);
console.log(add.length); */

function add1(x,y){
    console.log(new.target);
    return x + y ;
}

let obj = add1(2,3);
//console.log(obj);

let result = new add1(3,3);
//console.log(result);

