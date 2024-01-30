let cat = {"Type":'cat', "Sound":'Meow'};
let dog = {"Type": 'Dog', "Sound":"Woof"};

const say = function (message){
    console.log(message);
   // console.log(num);
    console.log(this.Type +" Say "+this.Sound);
}

say.apply(cat,['this is simple message',10]);

const say2 = function (message,num){
    console.log(message);
    console.log(num);
    console.log(this.Type +" Say "+this.Sound);
}

say2.apply(cat,['this is simple message',10]);