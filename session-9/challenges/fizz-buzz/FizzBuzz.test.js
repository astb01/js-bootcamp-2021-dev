import { expect } from "@jest/globals";
import { describe } from "yargs";
import { fizzBuzz, fizzBuzzWithRange } from "./FizzBuzz";

describe("FizzBuzz", () => {
  it(`should return 'fizz' when multiple of 3`, () => {
    // ARRANGE
    const number = 3;
    const expectedOutput = `fizz`;

    // ACT:
    const result = fizzBuzz(number);

    // ASSERTION(s):
    expect(result).toBe(expectedOutput);
  });

  it(`should return 'buzz' when multiple of 5`, () => {
    // ARRANGE
    const number = 5;
    const expectedOutput = `buzz`;

    // ACT:
    const result = fizzBuzz(number);

    // ASSERTION(s):
    expect(result).toBe(expectedOutput);
  });

  it(`should return 'buzz' when multiple of 15`, () => {
    // ARRANGE
    const number = 15;
    const expectedOutput = `fizzbuzz`;

    // ACT:
    const result = fizzBuzz(number);

    // ASSERTION(s):
    expect(result).toBe(expectedOutput);
  });

  it("should return the number if not a multiple of 3, 5 or 15", () => {
    const number = 1;

    // ACT:
    const result = fizzBuzz(number);

    // ASSERTION(s):
    expect(result).toBe(number);
  });
});

describe("FizzBuzz using range", () => {
  it("should render 1 2 fizz 4 buzz, when range is 1 to 5", () => {
    const start = 1;
    const end = 5;

    const result = fizzBuzzWithRange(start, end);

    expect(result).toBe("1, 2, fizz, 4, buzz");
  });

  it(`should render 'fizz, 7, 8, fizz, buzz' when range is 1 to 5`, () => {
    const start = 6;
    const end = 10;

    const result = fizzBuzzWithRange(start, end);

    expect(result).toBe("fizz, 7, 8, fizz, buzz");
  });
});

describe("FizzBuzz with each", () => {
  it.each([
    [1, 1],
    [3, "fizz"],
    [5, "buzz"],
    [15, "fizzbuzz"],
  ])(`given %i should render fizzbuzz output`, (input, expected) => {
    const result = fizzBuzz(input);

    expect(result).toBe(expected);
  });
});
