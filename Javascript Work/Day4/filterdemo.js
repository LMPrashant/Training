function sum(...args) {
    return args
      .filter(function (e) {
        return typeof e === 'number';
      })
      /* .reduce(function (prev, curr) {
        return prev + curr;
      }); */
      .map(function (p) {
        return p*p;
      });
}

let res = sum(2,5,'POP',null,true,6);
console.log(res);

function sum1(...args) {
    return args
      .filter((e) => {
        return typeof e === 'number';
      })
       .reduce((prev, curr) => prev + curr)

}

let res1 = sum1(2,5,'POP',null,true,6);
console.log(res1);
console.log("====================");

numbers = [2,3,5,6]
let num = (...args) =>{
   return args
    .reduce((x,y) => {
       return Math.min(x,y)
    })
}

var result = num(...numbers);
console.log(result);

let findmax = (...srgs) =>{
    return srgs
    .reduce((a,b) => {
    return Math.max(a,b)})
    
}

