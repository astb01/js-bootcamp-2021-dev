// Conditionals:
console.log("Conditionals");

/*
if (expression) {
    // logic goes here
}
*/

let personsAge = 18;

if (personsAge > 16) {
  console.log("Can vote");
} else {
  console.log("Cannot vote");
}

// if else if else:
const baggageAllowanceInLbs = 2;
let additionalCost = 100;

if (baggageAllowanceInLbs < 20) {
  console.log("No extra costs");

  if (baggageAllowanceInLbs < 5) {
    console.log("No need to book bags");
  }
} else if (baggageAllowanceInLbs < 30) {
  console.log("Additional charge is 5");
  additionalCost += 5;
} else if (baggageAllowanceInLbs < 40) {
  console.log("Additional charge is 10");
  additionalCost += 10;
} else {
  console.log("What are you taking, an elephant");
}

// Ternary:
const amount = 100;
const shouldChargeTax = amount > 50 ? true : false;

// Switch Statements:
const coinInserted = 140;

switch (coinInserted) {
  case 20:
  case 50:
  case 100:
    console.log(`Inserted ${coinInserted}`);
    break;
  default:
    console.log("This machine only accepts 20p, 50p and £1");
    break;
}

const num = 2;
const classSize = 5;

switch (classSize) {
  case num < 3:
    console.log("Works");
    break;
}
