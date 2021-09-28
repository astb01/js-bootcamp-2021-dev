console.log("Functions");

// HOISTING

// Function
// Method

// Function Declaration:
function sayMessage() {
  // locally scoped addNum:
  function addNum(num1, num2) {
    return num1 + num2;
  }

  console.log("Hello", addNum(1, 2));
}

// invoke the function
sayMessage();

// addNum(5, 5); -- this wont work due to not being in global scope

// Function Expression:
const sayAnotherMessage = function () {
  console.log("Another message called");
};

sayAnotherMessage();

// ========= INVOKE RIGHT AWAY =======
(function () {
  console.log("This will run right away!!!");
})();

// ============ Functions With Params =========
// parameter / argument

function addFive(num) {
  return num + 5;
}

const result = addFive(3);
console.log(result);

// ES6 Arrow function:
const addFiveArrow = (num) => num + 5;

const formatPerson = (personDetails) => {
  const { firstName, lastName, age } = personDetails;

  return {
    name: `${firstName} ${lastName}`,
  };
};

const formattedPerson = formatPerson({
  firstName: "John",
  lastName: "Bob",
  age: 23,
});

// SRP - Single Responsibility Principle
// KISS - Keep It Simple Stupid
// DRY - Dont Repeat Yourself
