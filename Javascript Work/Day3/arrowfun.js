/* function getMessage(){
    return "Hello";
} */

//console.log(getMessage());

let x = () => { return "Hello";}

console.log(x());

let add = (a,b) => { return a + b;}

console.log(add(3,6));

let multiply = (a,b) => { return a*b }
console.log(multiply(3,2));

let getMessage = (name) => {
    console.log("hello " + name);
    console.log("Bye" + name);
}

getMessage("Preeti");