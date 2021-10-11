const messageRE = /helo/;
const actualMessage = "hello";

// verifies if there is a match and returns true/false:
if (messageRE.test(actualMessage)) {
  console.log("This matched", actualMessage);
}

const phrase = `
The fat cat ran down the street.
It was searching for a mouse to eat.
`;

const phone = "123-999";
const atRE = /[0-9]{3}/g;

console.log("Match", phone.match(atRE));

const name = "John";
const letterRE = /[a-z]/;

if (/[a-z]/.test(name)) {
  console.log(name, "matched");
}
