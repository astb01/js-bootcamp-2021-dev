export const romanNumerals = (number) => {
  //   let result = "";
  //   if (number < 4) {
  //     for (let i = 0; i < number; i++) {
  //       result += "I";
  //     }
  //   } else if (number === 4) {
  //     return "IV";
  //   }

  //   // 1 - number

  //   if (number === 5) {
  //     return "V";
  //   } else if (number === 10) {
  //     return "X";
  //   }

  //   return result;

  let result = "";

  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let temp = number;

  while (temp > 0) {
    for (let i in roman) {
      if (roman[i] <= temp) {
        result += i;
        temp -= roman[i];
        break;
      }
    }
  }
  return result;
};
