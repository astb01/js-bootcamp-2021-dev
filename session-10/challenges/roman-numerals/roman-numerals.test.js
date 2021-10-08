/*
Value 1 = I
Value 5 = V
Value 10 = X
Value 50 = L
Value 100 = C
Value 500 = D
Value 1000 = M
*/

import { romanNumerals } from "./roman-numerals";

describe("convertNumber", () => {
  it("should return I when given 1", () => {
    expect(romanNumerals(1)).toBe("I");
  });

  it("should return II when given 2", () => {
    expect(romanNumerals(2)).toBe("II");
  });

  it("should return III when given 3", () => {
    expect(romanNumerals(3)).toBe("III");
  });

  it("should return X when given 10", () => {
    expect(romanNumerals(10)).toBe("X");
  });

  it("should return V when given 5", () => {
    expect(romanNumerals(5)).toBe("V");
  });

  it("Should return IV when given 4", () => {
    expect(romanNumerals(4)).toBe("IV");
  });
});

/*
describe("convertNumber", () => {
    it.each([
        [1, "I"],
        [2, "II"],
        [3, "III"],
    ])(`given %i should then return %i`)
})
*/
