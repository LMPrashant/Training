let cat = {"Type":'cat', "Sound":'Meow'};
let dog = {"Type": 'Dog', "Sound":"Woof"};

const say = function (message){
    console.log(message);
   // console.log(num);
    console.log(this.Type +" Say "+this.Sound);
}

say.call(dog,'The dog says');