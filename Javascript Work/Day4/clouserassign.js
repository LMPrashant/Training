function greeting(message){
    return ((name) => message + " " + name )
}

let say = greeting("Hello"); // returning the say as function to print output we have to pass param in say func.
console.log(say("Prashant"));