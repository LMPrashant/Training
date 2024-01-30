/* const months = ["jan","feb","march","april","may"]

//const reversemonths = months.reverse(); //it will change the original array
const reversemonth = months.toReversed();
console.log(reversemonth);
console.log(months);

const prime = [7,5,3,2,10]

const sortprime = prime.toSorted();
console.log(sortprime);

const num = [1,2,3,4,5,6]
const numsort = num.toSpliced(2,2);
console.log(numsort);  */

const usernames = ['user1', 'user2', 'user3'];

//old way of updating array value
//usernames[1] = 'newUser';
//console.log(usernames) //=> ['user1', 'newUser', 'user3']

// using with()
const updatedUsernames = usernames.with(1, 'newUser');
console.log(usernames) //=> ['user1', 'user2', 'user3'] //Original array remains unchanged
console.log(updatedUsernames)// => ['user1', 'newUser', 'user3']