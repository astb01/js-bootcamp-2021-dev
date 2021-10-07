export const addAllNumbers = (arr) => {
  let total = 0;

  arr.forEach(function (item) {
    if (typeof item === "number") {
      total += item;
    }
  });

  return total;
};

export const divide = (num1, num2) => num1 / num2;
