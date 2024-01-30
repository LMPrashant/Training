/* function add(a,b){
    return a + b;
}

console.log(add(3,5)); */

/* function add(a=5,b=2){
    return a + b;
}

console.log(add()); */

function add() {
  a = arguments[0];
  b = arguments[1];
  console.log(arguments[2]);
  var res = a + b;
  console.log(res);
}

add(3, 6);
