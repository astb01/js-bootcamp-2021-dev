console.log("Fundamentals 6");

//  Callback Functions:
const people = ["John", "Chris", "Ben", "Lauren", "Phil"];

const looper = (argument) => {
  console.log("argument", argument);
};

people.forEach(looper);

// Fast Food Example:
const makeDrink = (first, callback, last) => {
  setTimeout(() => {
    console.log("Making drink - ", first, last);
    callback(); // call the intended downstream function
  }, 3000);
};

const makeFries = () => {
  console.log("Making fries");
};

const makeBurger = () => {
  console.log("Making burger");
};

const orderMeal = () => {
  makeBurger();
  makeDrink(1, makeFries, 2);
};

orderMeal();
