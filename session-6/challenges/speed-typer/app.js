const words = [
  "heavenly",
  "discover",
  "increase",
  "scientific",
  "mint",
  "flippant",
  "oatmeal",
  "mend",
  "ship",
  "amount",
  "telling",
  "moan",
  "rotten",
];

// time left to play the game
let time = 5;
// keeps track of the score:
let score = 0;
// determines if the user is playing or not
let isPlayingGame;

// DOM Selectors:
const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");

// Initialises the game:
const initialise = () => {
  console.log("Initialised Game!!!");

  // fetch new random word and display it:
  showWord();

  // Fetch the user's input:
  wordInput.addEventListener("input", checkInput);

  // Do count down by one second:
  setInterval(countDownTimer, 1000);

  // check the status of the game:
  setInterval(checkGameStatus, 500);
};

const checkGameStatus = () => {
  if (!isPlayingGame && time === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
};

const countDownTimer = () => {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlayingGame = false;
  }

  timeDisplay.innerHTML = time;
};

const checkWordsMatch = () => {
  let matched = false;

  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "CORRECT";
    matched = true;
  } else {
    message.innerHTML = "";
  }

  return matched;
};

const checkInput = () => {
  if (checkWordsMatch()) {
    // there was a match:

    isPlayingGame = true;
    time = 6;

    // show new word for the game to actually start:
    showWord();

    // Reset the input:
    wordInput.value = "";

    score++;
  }

  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};

const showWord = () => {
  const randIdx = Math.floor(Math.random() * words.length);
  const wordSelected = words[randIdx];

  currentWord.innerHTML = wordSelected;
};

window.addEventListener("load", initialise);
