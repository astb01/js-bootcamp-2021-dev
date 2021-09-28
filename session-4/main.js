console.log("Session 4");

// destructuring:
const numbers = [1, 2, 3];

const [firstNumber] = numbers;
console.log("firstNumber:", firstNumber);

const person = {
  name: "Jill Smith",
  age: 23,
};

const { name: fullName } = person;
console.log("Full Name: ", fullName);

// If statement:
let value;

if (value) {
  console.log("This has a value");
} else {
  console.log("This is an empty variable", value);
}

// Operators:

// '||' it checks the LHS for 0, "", NaN, null or undefined
let count = null;
let text = "";

let qty = count || 42;
console.log(qty);

let message = text || "hello world";
console.log(message);

// Coalesce Operator (??)

let food = null ?? "There is no food";
console.log(food);

// Chaining Operator (Optional Chaining)

const zoo = {
  lions: ["leo"],
  zookeeper: { name: "Brenda" },
  describe() {
    console.log("Zoo is alive");
  },
};

const leo = zoo.lions[0];
console.log(leo);

const bungleTheBear = zoo?.bears?.[0] ?? "No bears in the zoo";
console.log(bungleTheBear);

zoo.describe?.();

// ============ SCOPE ===========

const num = 1;

if (num > 0) {
  const num = 2;
  console.log("1. Num inside is", num);

  if (num > 1) {
    const anotherNumber = 23;
    console.log("2. Another Number is", anotherNumber);

    console.log("3. Another Number with num", num);
  }

  // console.log(anotherNumber); -- this wont translate
}

console.log("4. Num outside is", num);
