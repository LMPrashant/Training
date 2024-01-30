let car = {
    speed: 5,
    start: function() {
        console.log('Start with ' + this.speed + ' km/h');
    }
};

let aircraft = {
    speed: 10,
    fly: function() {
        console.log('Flying');
    }
};

console.log(car);
console.log(aircraft.fly);
car.start.call(car);
aircraft.fly();
console.log("======================================")
let taxing = car.start.bind(aircraft);
taxing();