import { addAllNumbers, divide } from "./Calculator";

describe("Calculator:", () => {
  it("Should add all numbers", () => {
    // AAA

    // ARRANGE (MAY OR MAY NOT HERE):
    const arr = [1, 2, 3];

    // ACT:
    const result = addAllNumbers(arr);

    // ASSERT
    expect(result).toBe(6);
  });

  it("Should divide two numbers", () => {
    const num1 = 10;
    const num2 = 2;

    const result = divide(num1, num2);

    expect(result).toBe(5);
  });

  describe("Edges Cases:", () => {
    it("Should not add text when adding numbers", () => {
      // ARRANGE (MAY OR MAY NOT HERE):
      const arr = [1, 2, 3, "hello", "5"];

      // ACT:
      const result = addAllNumbers(arr);

      expect(result).toBe(6);
    });
  });
});
