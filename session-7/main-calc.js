//const { add, divide, PI, TRAFFIC_LIGHT_COLOURS } = require("./calculator");
const Calculator = require("./calculator");

console.log(Calculator.TRAFFIC_LIGHT_COLOURS);

console.log("PI", Calculator.PI);

console.log("Add using require", Calculator.add(3, 3, 3));

console.log("Divide using require", Calculator.divide(6, 2));
