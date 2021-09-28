/*userInput = document.getElementById("userinput");
computerTurn = document.getElementById("computer-choice");
userChoice = document.getElementById("player-choice");

// Game
// Random function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Start Game
function play() {
  let userChoice = "rock";
  let rpsOptions = ["rock", "paper", "scissors"];
  let randomRock = getRandomInt(3);
  let computerChoice = rpsOptions[randomRock];
  console.log(computerChoice);

  document.getElementById("computer-choice").innerHTML = computerChoice;
  userChoice = document.getElementById("player-choice").innerHTML = userInput;
}
*/

const userChoice = "Scissors";
const options = ["Rock", "Paper", "Scissors"];
const compChoice = options[Math.floor(Math.random() * 3)];

console.log("User: ", userChoice);
console.log("Computer: ", compChoice);
if (userChoice === compChoice) {
  console.log("Draw");
} else if (
  (userChoice === "Rock" && compChoice === "Scissors") ||
  (userChoice === "Paper" && compChoice === "Rock") ||
  (userChoice === "Scissors" && compChoice === "Paper")
) {
  console.log("User wins");
} else {
  console.log("Computer wins");
}
