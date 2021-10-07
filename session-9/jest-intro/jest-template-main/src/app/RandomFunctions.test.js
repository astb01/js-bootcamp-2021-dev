test("Should be equal as an object", () => {
  const myObject = {};

  expect(myObject).toEqual({});
});

test("Should not have I in team", () => {
  const word = "team";

  expect(word).not.toMatch(/I/);
});
