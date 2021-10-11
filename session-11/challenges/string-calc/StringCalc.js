export const calculator = (input) => {
  if (input === "") {
    return 0;
  }

  const regex = /,|\||~/;
  const inputArray = input.split(regex);
  let total = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const number = parseInt(inputArray[i], 10);

    if (number < 0) {
      throw new Error("No negative numbers");
    }

    total += number;
  }
  return total;
};
