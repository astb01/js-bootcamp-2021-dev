const album = {
  title: "21",
  artist: "Adele",
  year: 2000,
  songs: [
    {
      name: "Hello",
    },
    {
      name: "Rolling the deep",
    },
  ],
  info() {
    return `${this.title} was created by ${this.artist}`;
  },
};

console.log(album);

// access properties using DOT notation:
console.log(`Artist is ${album.artist}`);
console.log(album.info());

// JSON:
const product = {
  name: "Samsung TV",
  saleItem: false,
  dimensions: [
    {
      width: 1220,
      height: 900,
    },
  ],
  info() {
    return `${this.name}'s are great!`;
  },
};

let productAsStr = JSON.stringify(product); //, null, 2);
console.log(productAsStr);

// JSON back to JSON Object:
let productBackAsObj = JSON.parse(productAsStr);
console.log(productBackAsObj);

// You can also create an object EXPLICITLY using the 'new'
// keyword and the Object Class.
let car = new Object();
car.model = "Ford";
console.log(car);

// -------------------------------------------

// Session 3:

const firstName = "Bob Smith";

console.log(firstName.length);

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

const bob = firstName.substr(0, firstName.length);
console.log(bob);

const phoneNumber = "032-424-234-234";
const phoneParts = phoneNumber.split("-");
console.log(phoneNumber, " => ", phoneParts);

const emailAddress = "foo@bar.com";

const indexOfAtSymbol = emailAddress.indexOf("@"); //.indexOf("$");
console.log(indexOfAtSymbol);

// Arrays:

// High Order Functions - Is a function, that takes another function as an
// argument, or returns a function as it's result

const countries = [
  "england",
  "france",
  "germany",
  "spain",
  "zimbabwe",
  "italy",
];

const matchedCountries = countries.filter(function (country) {
  return country.startsWith("z");
});

console.log("Matched", matchedCountries);

// ES6:

// implied return and no need for explicit function definition:
const mediterranean = countries.filter((country) => country.startsWith("s"));
console.log(mediterranean);

// MAP:
const people = [
  { name: "Boris Johnson", title: "He has no clue" },
  { name: "Wacko Jacko", title: "Slides everywhere" },
];

const peopleWithDateCreation = people.map(function (person) {
  return {
    name: person.name.toUpperCase(),
    title: person.title,
    dateCreated: new Date(),
  };
});

console.log(peopleWithDateCreation);

// ES6:
const es6People = people.map((person) => {
  return {
    name: person.name.toUpperCase(),
    title: person.title,
    dateCreated: new Date(),
  };
});

console.log("Es6 example", es6People);

// SOME
const fruits = ["apple", "pear", "grape"];

const fruitResult = fruits.some(function (fruit) {
  return fruit === "apple";
});

console.log("es5 fruitResult", fruitResult);

// ES6:

const es6FruitResult = fruits.some((fruit) => fruit === "apple");
console.log("es6FruitResult", es6FruitResult);

// SOME with objects:

const footballTeams = [
  {
    name: "Manchester United",
    nationalities: ["Portugese", "English", "French"],
  },
  {
    name: "Liverpool",
    nationalities: ["Egyptian", "Brazilian"],
  },
];

const hasEnglishPlayers = footballTeams.some((team) => {
  return team.nationalities.includes("Japanese");
});

console.log("hasEnglishPlayers", hasEnglishPlayers);

// SORT

let letters = ["z", "b", "k"];
//naturally ordered (assumes string)
console.log(letters.sort());

const numbers = [1, 2, 30, 2, 4];
console.log("Unsorted", numbers);

numbers.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  return -1;
  // return a === b ? 0 : a > b ? 1 : -1;
});

console.log("Sorted", numbers);

let animals = ["lion", "Zebra", "turtle"];

console.log(animals.sort());

const sortedCaseInsensitiveAnimals = animals.sort((a, b) => {
  let firstAsUpper = a.toUpperCase();
  let secondAsUpper = b.toUpperCase();

  if (firstAsUpper === secondAsUpper) {
    return 0;
  } else if (firstAsUpper > secondAsUpper) {
    return 1;
  }

  return -1;
});

console.log("sorted Animals ignoring case", sortedCaseInsensitiveAnimals);

// Length of an array:
console.log("Animals length", animals.length);

// IndexOf
console.log("Turtle is at position", animals.indexOf("turtle"));

// Push:

// If we use const here, then the reference to 'places' will give us
// the current value regardless of whether the value is being
// inserted after
let places = [];

places.push({
  name: "Barcelona",
  population: 10_000_000,
});

console.log(places);

places.push({
  name: "Bristol",
  population: 2_000_000,
});

console.log("Places after Bristol added", places);

// Pop
const bristol = places.pop();
console.log("Last place", bristol);

// Shift

places.push({
  name: "Lisbon",
  population: 23_000_000,
});

console.log(places);

console.log(places.shift());

// Unshift:
places.unshift({
  name: "Tokyo",
  population: 999_000_000,
});

console.log(places);

// SORT:
let ages = [1, 111, 33, 222, 11, 55, 3, 7];
ages.sort();

console.log("Natural order", ages);

// natural ordering
//console.log(ages.sort());

// manual ordering:
ages.sort((a, b) => a - b);

console.log("Manual sort", ages);

// Object Destructuring:

const person = {
  name: "John",
  address: {
    street: "1st Street",
    city: "London",
    postCode: "L1",
  },
  hobbies: ["sports", "films", "music"],
};

// use curly braces for object destructuring:
const { name, address, hobbies } = person;

console.log("Name", name);
console.log("Address", address);
console.log("Hobbies", hobbies);

const {
  address: { street },
} = person;

console.log("Street is: ", street);

const productDetails = ["samsung", "a large tv"];

// use square brackets when using arrays
const [productName, productDescription, productPrice] = productDetails;
console.log("Product Name is: ", productName, productDescription, productPrice);

// Operators:
let firstNumber = 1;

// incrementing first number by 1:
firstNumber = firstNumber + 1;

firstNumber++;
++firstNumber;

firstNumber = firstNumber + 2;

// abbreviated:
firstNumber += 2;

// subtract:
let digits = 5;

digits -= 2;
console.log(digits);

// decrement:
// post decrement
digits--;
console.log("post decrement", digits);

// pre-decrement:
--digits;
console.log("pre decrement", digits);

// modulus is a remainder operator
let sum = 10 % 2;
console.log("Sum", sum);

// Equality:
let classSize = "12";

if (classSize == 12) {
  console.log("true");
} else {
  console.log("false");
}

// Strict Equality:
if (classSize === 12) {
  console.log("true");
} else {
  console.log("false");
}

const currentWeather = "Sunny";

// strict negation:
const isHappy = "raining" !== currentWeather;
