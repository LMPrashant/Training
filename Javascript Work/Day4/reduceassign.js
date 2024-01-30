numbers = [2,4,7,8]
let findmax = (...srgs) =>{
    return srgs
    .reduce((a,b) => {
        return Math.max(a,b)})
        
    }

var result = findmax(...numbers);
console.log(result);