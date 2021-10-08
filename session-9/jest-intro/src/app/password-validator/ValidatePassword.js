export const validatePassword = (password) => {
  const hasValidLength = password.length >= 8;
  const hasCharacter = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  return hasValidLength && hasCharacter && hasNumber;
};
