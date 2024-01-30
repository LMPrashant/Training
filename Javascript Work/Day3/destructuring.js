let numbers = [1,2,3,4]
//let [a,b,c,d] = numbers;
let [a,,,b] = numbers;

console.log(a);     //1
console.log(a+b);   //5

let emp = {"name":"Parsh", "age": 25}

//let {name,age} = emp;
let {age:age,name:name1}= emp;

console.log(name1);