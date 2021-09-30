console.log("***** Fundamentals 5 *****");

// Functions:

// Declaration (Global):
function debitAccount(account, amount) {
  account.total += amount;

  return account;
}

// Invoke/Calling:
const account = {
  total: 0,
};

const amount = 100;

const updatedAccount = debitAccount(account, amount);
// console.log("Updated account", updatedAccount, account);

// Function Expression:
const greet = function (message) {
  return `Hello ${message}`;
};

// console.log(greet("Frank"));

// Function Expression as Arrow:
const messageRenderer = (message = "Hello Everyone") => `Hello ${message}`;

// console.log(messageRenderer());

// Functions with default values:

const makeCoffee = (
  coffeeType = "americano",
  coffeeOptions = {
    hasMilk: true,
    hasSugar: false,
    toppings: [],
  }
) => {
  console.log(
    `Coffee ${coffeeType}, Coffee Options ${JSON.stringify(coffeeOptions)}`
  );

  let coffeeMessage = "";

  if (coffeeType === "cappuccino") {
    coffeeOptions?.toppings?.forEach(function (topping) {
      coffeeMessage += `Added ${topping},`;
    });

    coffeeMessage += "Enjoy your " + coffeeType;
  } else {
    coffeeMessage = "Sorry we do not sell " + coffeeType;
  }

  return coffeeMessage;
};

const coffeeType = "cappuccino";
const coffeeOptions = {
  toppings: ["vanilla"],
  hasSugar: true,
  hasMilk: false,
};

console.log(
  makeCoffee(coffeeType, {
    hasSugar: true,
    hasMilk: true,
  })
);

// Error Handling:

const divideNumbers = (first, second) => {
  if (second === 0) {
    throw new Error("Not divisible by zero");
  }

  return first / second;
};

const calculateDiscount = () => {
  let value = 0;

  try {
    const dividedValue = divideNumbers(10, 0);
    value = `${dividedValue}`;

    console.log("divideNumbers =>", value);
  } catch (err) {
    // handle error gracefully:
    value = 0;
    console.error(err);
  }
};

//calculateDiscount();

// ============= FEW MORE OPERATORS ===============

// REST operator:

const createPersonObject = (firstName, lastName) => {
  return {
    fullName: `${firstName} ${lastName}`,
  };
};

console.log(createPersonObject("John", "Doe"));

const createPersonObjectWithRest = (firstName, lastName, ...details) => {
  console.log(
    `createPersonObjectWithRest: firstName ${firstName}, Details: ${details}`,
    details
  );

  // Destructuring:
  const [street, city, postCode, phone, nino] = details;

  const person = {
    firstName,
    lastName,
    addressLine1: street,
    city,
    postCode,
    phone,
    nationalInsuranceNumber: nino,
  };

  return person;
};

console.log(
  createPersonObjectWithRest(
    "John",
    "Rest",
    "1st Street",
    "Manchester",
    "M2",
    "0987655433",
    "223432421342423423"
  )
);

// Watch out!

// ============= SPREAD OPERATOR ===========

// DEEP AND SHALLOW COPY

const numbers = [0, 1, 2, 3];
// Copies references:
const copyOfNumbers = numbers;

// both are now 99 at position 0:
copyOfNumbers[0] = 99;

console.log("Numbers", numbers, "CopyOfNumbers", copyOfNumbers);

// Copy with spread operator:
const copyOfNumbersEs6 = [...numbers];

copyOfNumbersEs6[0] = 77;

console.log("Numbers", numbers, "copyOfNumbersEs6", copyOfNumbersEs6);

// Objects:
const person = {
  name: "John",
  address: {
    places: ["A", "B"],
    coordinates: {
      long: 99,
      lat: 88,
    },
  },
};

// ES6 copy (spread operator):
const copiedPerson = { ...person };

copiedPerson.name = "Foo";

// Shallow Copy so be careful:
copiedPerson.address.places.push("C");

console.log("person", person, "copiedPerson", copiedPerson);

// JSON Parse/JSON Stringify - Deep Copy:

const personStr = JSON.stringify(person);
const copiedPersonFromStr = JSON.parse(personStr);
copiedPersonFromStr.address.places.push("D");

console.log("copiedPersonFromStr", copiedPersonFromStr);
