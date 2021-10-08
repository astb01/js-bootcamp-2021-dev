describe("Adds all numbers", () => {
  it.each([
    [1, 2, 3],
    [3, 4, 7],
  ])(`should add %i to %i to give %i`, (first, second, expected) => {
    const result = first + second;

    expect(result).toBe(expected);
  });
});
