import reverseArr, { sumAllNumbers, existsInArr } from "./array-functions.js";
import Car from "./Car.js";

const arr = [1, 2, 3, "hello"];

console.log("sumAllNumbers", sumAllNumbers(arr));

console.log("existsInArr", existsInArr(arr, 1));

console.log("reverseArr", reverseArr([1, 2, 3, 4, 5]));

// create a new instance of car:
const ford = new Car(1.2, "Fiesta", "Ford");

console.log(ford, typeof ford);
