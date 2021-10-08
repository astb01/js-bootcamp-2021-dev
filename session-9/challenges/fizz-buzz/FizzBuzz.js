export const fizzBuzz = (value) => {
  if (value % 15 === 0) {
    return "fizzbuzz";
  }
  if (value % 5 === 0) {
    return "buzz";
  }
  if (value % 3 === 0) {
    return "fizz";
  }

  return value;
};

export const fizzBuzzWithRange = (start, end) => {
  const terms = [];

  for (let i = start; i <= end; i++) {
    terms.push(fizzBuzz(i));
  }

  return terms.join(", ");
};
