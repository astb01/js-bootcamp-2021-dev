console.log("Session 7");
/*
const foodOption = "crisps";

if (foodOption === "crisps") {
  console.log("You chose crisps");
} else if (foodOption === "drinks") {
  console.log("You chose drinks");
}

switch (foodOption) {
  case "crisps":
    console.log("You chose crisps");
    break;
  case "drinks":
    console.log("You chose drinks");
    break;
}
*/

// ===== REST =====
const sumPrimes = (...nums) => {
  console.log(nums);
};

console.log(
  "Sum of Prime Numbers",
  sumPrimes("This is a prime number function", 1, 2, 3, 4, 5)
);

// ====== SPREAD ======
const people = ["john", "jill"];

const copyOfPeople = people; // copying the reference

copyOfPeople[0] = "bob";
console.log(copyOfPeople, people);

const copyOfPeopleEs6 = [...people];
copyOfPeopleEs6[0] = "sue";

console.log(copyOfPeopleEs6, people);

// object:
const album = {
  year: 2000,
  artist: "Ariana Grande",
  song: "Hello",
};

const copyOfAlbum = album;

copyOfAlbum.year = 2050;

console.log("copyOfAlbum", copyOfAlbum, "album", album);

const copyOfAlbumEs6 = { ...album, label: "Sony" };

// deep copying:
const film = {
  year: 2021,
  crew: ["Ariana Grande"],
  film: "No Time To Die",
  genre: "Action",
};

// convert the object to copy as a string
const filmAsStr = JSON.stringify(film);

// Convert the JSON back to a JSON object:
const copyOfFilm = JSON.parse(filmAsStr);

console.log(copyOfFilm);

// ===============
// const termMessage = document.getElementById("termMessage");
// const termInput = document.getElementById("termInput");

// termInput.addEventListener("keyup", function (event) {
//   const currentValueEntered = event.target.value;

//   if (/^\d$/.test(currentValueEntered)) {
//     termMessage.style.display = "block";
//   } else {
//     termMessage.style.display = "none";
//   }
// });

// window.addEventListener("load", function () {
//   termMessage.style.display = "none";
// });

// ============= PURE FUNCTIONS ================

const add = (num1, num2) => {
  const total = num1 + num2;

  return total;
};

console.log(add(5, 5));

// What is not a pure function:

const addNonPure = (num1, num2) => {
  const total = num1 + num2 + Math.random();

  return total;
};

console.log(addNonPure(5, 5));

const createPerson = (firstName, dob) => {
  return {
    firstName,
    dob,
  };
};

console.log(createPerson("John", "12-09-2009"));
