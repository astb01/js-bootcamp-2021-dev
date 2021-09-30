/* 
Provided default so that the no error is thrown due to 
being null on split:
*/
const customRegistration = (registration = "") => {
  // can also use registration.split("");
  let currentReg = Array.from(registration.toUpperCase());

  // 8 in length?
  if (currentReg.length !== 8) {
    // single exit point:
    throw new Error("You havent provide a reg of length 8");
  }

  // check if registration has a single space:
  const hasSingleSpace =
    currentReg.filter((crValue) => crValue === " ").length === 1 ? true : false;

  if (!hasSingleSpace) {
    throw new Error("Registration must contain a single space");
  }

  let result = "";

  for (let i = 0; i < currentReg.length; i++) {
    if (i === 0) {
      result += currentReg[i];
    } else {
      if (currentReg[i] === "A") {
        result += "4";
      } else if (currentReg[i] === "B") {
        result += "8";
      } else if (currentReg[i] === "S") {
        result += "5";
      } else if (currentReg[i] === "E") {
        result += "3";
      } else {
        result += currentReg[i];
      }
    }
  }

  // single point of return:
  return result;
};

console.log("MSSA SMK =>", customRegistration("MSSA SMK"));

// Errors:
// console.log("MSSA SMK =>", customRegistration("MSSAsdfsdf SMK"));
// console.log("MSSA SMK =>", customRegistration("        "));
// console.log("MSSA SMK =>", customRegistration("MSS  SMK"));
