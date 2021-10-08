export const addAllNumbers = (arr) => {
  let total = 0;

  arr.forEach(function (item) {
    if (typeof item === "number") {
      total += item;
    }
  });

  return total;
};

export const divide = (num1, num2) => {
  if (num2 === 0) {
    throw new Error("Cant divide by zero");
  }

  return num1 / num2;
};
