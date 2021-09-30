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
console.log("Updated account", updatedAccount, account);

// Function Expression:
const greet = function (message) {
  return `Hello ${message}`;
};

console.log(greet("Frank"));

// Function Expression as Arrow:
const messageRenderer = (message = "Hello Everyone") => `Hello ${message}`;

console.log(messageRenderer());

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
    coffeeOptions.toppings.forEach(function (topping) {
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

console.log(makeCoffee());
