import { calculator } from "./StringCalc";

describe("String calculator", () => {
  it("An empty string should return zero", () => {
    const input = "";

    const result = calculator(input);

    expect(result).toBe(0);
  });

  it("A single number input will return the input", () => {
    const input = "7";

    const result = calculator(input);

    expect(result).toBe(7);
  });

  it("A different single number input will return the input", () => {
    const input = "5";

    const result = calculator(input);

    expect(result).toBe(5);
  });

  it("An input of two numbers split by a comma will return the sum", () => {
    const input = "2,2";

    const result = calculator(input);

    expect(result).toBe(4);
  });

  it("Should return the sum when there is more than 1 delimiter and 2 numbers ", () => {
    const input = "2,3,4";

    const result = calculator(input);

    expect(result).toBe(9);
  });

  it("Should return the sum where ther e are multiple delimiters | ~ ,", () => {
    const input = "2,3~4|5";

    const result = calculator(input);

    expect(result).toBe(14);
  });

  it("Should throw an error with a negative number", () => {
    const input = "-1,3";

    expect(() => calculator(input)).toThrow();
  });
});
