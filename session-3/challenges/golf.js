const names = [
  "Hole in one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Quit",
];

let par = 5;
let strokes = 2;

if (strokes === 1 && par === 4) {
  console.log(names[0]);
} else if (strokes === 1 && par === 1) {
  console.log(names[0]);
} else if (strokes === par && par === strokes) {
  console.log(names[3]);
} else if (strokes === 4 || strokes <= par - 2) {
  console.log(names[1]);
} else if (strokes === 4 || strokes <= par - 1) {
  console.log(names[2]);
} else if (strokes === 4 || strokes <= par + 1) {
  console.log(names[4]);
} else if (strokes === 4 || strokes <= par + 2) {
  console.log(names[5]);
} else {
  console.log(names[6]);
}
console.log(par, strokes);
