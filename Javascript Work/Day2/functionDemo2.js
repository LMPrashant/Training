/* function requiredArg(x=requiredArg(),y=requiredArg()){
    throw new Error('The argument is required');
}

function add(x,y){
    return x + y;
}

//console.log(add(100));
console.log(add(100,50));

 */

function add(x = 2, y = x, z = x*y){
    return x + y + z;
}

console.log(add());