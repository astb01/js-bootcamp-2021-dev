/*
Write a program that produces the Fibonacci sequence: 
0, 1, 1, 2, 3, 5, 8, 13, 21, ..

Aim: 0 - 50 is the range.
*/
console.log("Fibonacci");

let a = 0;
let b = 1;
let newSum = 0;

console.log(a);
console.log(b);

for (let i = 0; b < 50; i++) {
  newSum = a + b;

  if (newSum < 50) {
    console.log(newSum);
  }

  a = b;
  b = newSum;
}
