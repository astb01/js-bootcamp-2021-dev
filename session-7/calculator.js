const PI = 3.14;

const TRAFFIC_LIGHT_COLOURS = ["green", "amber", "red"];

function add(...nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }

  return total;
  //return nums.reduce((accumulator, current));
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("You cannot divide by zero!");
  }

  return num1 / num2;
}

module.exports = { add, divide, PI, TRAFFIC_LIGHT_COLOURS };
