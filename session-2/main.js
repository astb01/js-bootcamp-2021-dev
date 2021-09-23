// this is single comment

/*
This is a
multiline comment
*/

// document.getElementById("dateNow").innerHTML = "";

// Variables:

// 'var' has global/function scope

var myName = 8; // initialised
var country; // declared

// ES 2015/ES6
let firstName = "Jill";
console.log(firstName);

firstName = "Bob";

console.log(firstName);

// 'let' has block scope

const PI = 3.14535;

// Naming conventions:
let lastName; // camel-case

let age_of_person = 23; // snake case - do not use this format

// variables can start with letter, $, or underscore (_):
let _age = 99;
let $animal = "Lion";

// DO NOT do this:
let a;
let b;
let c;

// ------ DATA TYPES -------

// Numbers (whole numbers - positive and negative)

let numberOfSubscribers = 100000000;
let price = 99.99;
let temperature = -100;

// String
let reviewComments = "This is a string!";
let numberOfVisitors = "12";

let numberOfAnimalsInZoo = 12;

let total = numberOfVisitors + numberOfAnimalsInZoo;
console.log(total);

let zooComments = `The number of animals in a zoo is 
hello there
${numberOfAnimalsInZoo}`;

console.log(zooComments);

// Arrays - order is guaranteed for inserted

let names = ["John", "Lauren", "Art"];

let mixedArray = [12, "Hello", 99.99];

let countries = ["england", "france", "spain"];

console.log(countries);

// Objects
const productInfo = {
  name: "Heater",
  manufacturer: "Sony",
  price: 99.99,
  reviews: [],
};

console.log(productInfo);

const review = {
  date: new Date(),
  comment: "fan dabby dosesy",
  stars: 3,
};

// access reviews using the DOT notation:
productInfo.reviews.push(review);

productInfo["reviews"].push({
  date: new Date(),
  comment: "another review",
  stars: 4,
});

console.log(productInfo);

// Boolean
let isItRaining;

console.log(isItRaining); // undefined

isItRaining = true;

console.log(isItRaining);

// NULL

let response = null;

// Undefined:
let score;

console.log(score);

let footballTeam = "Manchester United";

console.log(typeof footballTeam);
console.log(typeof score);
console.log(typeof isItRaining);

// Multi dimensional Array:
let shoppingBasket = [
  ["Apples", 2, 0.34],
  ["Pears", 2, 0.66],
];

console.log("this should be apples", shoppingBasket[0][0]);
console.log(`this should be apples ${shoppingBasket[0][0]}`);

// JSON

// this is not JSON ...not quite....
const person = {
  name: "Matt Sam",
  age: 23,
  address: {
    street: "1st street",
  },
};

console.log("Person Object", person);

console.log("Person as JSON", JSON.stringify(person));

const car = {
  manufacturer: "Ferrari",
  model: "F2",
  describe() {
    return `${this.manufacturer}, ${this.model}`;
  },
};

console.log(car.describe());

const personAsStr = JSON.stringify(person);

console.log(personAsStr);

const personAsObj = JSON.parse(personAsStr);
console.log(personAsObj);

let name = "Raleigh";
let bike = {
  name, // name: Raleigh
  age: 23,
};

console.log(bike);

// Date
const dateNow = new Date();

console.log(dateNow);
