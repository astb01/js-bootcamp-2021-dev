/*
Validate passwords to ensure that:

- They are at least 8 characters (alpha/num) in length
- Contain at least one letter
- Contain at least one number
*/

import { validatePassword } from "./ValidatePassword";

describe("Validate Password", () => {
  // GIVEN WHEN THEN
  it("should return false when password is empty", () => {
    expect(validatePassword("")).toBe(false);
  });

  it("should return true when length of password is at least 8", () => {
    const password = "1234567a";

    expect(validatePassword(password)).toBe(true);
  });

  it("should return false when only numbers in password", () => {
    const password = "12345678";

    expect(validatePassword(password)).toBe(false);
  });

  it("should return false when only letters in password", () => {
    const password = "acdfghty";

    expect(validatePassword(password)).toBe(false);
  });

  it("should return false when only capital letters in password", () => {
    const password = "ABCDEFGH";

    expect(validatePassword(password)).toBe(false);
  });

  it("should return false when length is less than 8", () => {
    expect(validatePassword("wd546")).toBe(false);
  });
});
