async function sayHi(){
    return "hi";
}
async function sayHello(){
    return Promise.resolve("hello");
}

//sayHi().then(console.log);

async function display(){
    let res = await sayHi();
    let res2 = await sayHello();
    console.log(res);
    console.log(res2);
}

display();