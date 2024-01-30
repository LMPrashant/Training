function greeting(){
    let message = 'hi';

    function sayHi(){
        console.log(message);
    }

    sayHi();
}

//sayHi();
//greeting();

let hi = greeting;
hi();