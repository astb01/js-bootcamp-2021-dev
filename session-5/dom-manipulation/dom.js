console.log("Dom Is connected");

// SELECTORS:
const headingElement = document.getElementById("heading");
console.log(headingElement);

console.log(headingElement.innerHTML);

headingElement.innerHTML = "I just changed you!";

// Select single element using a class:
const paragraph = document.querySelector(".paragraph");

console.log(paragraph.innerText);

paragraph.innerText = "Hello World!";

// Select All Matching same class of 'item':
const allListItems = document.querySelectorAll(".item");
console.log(allListItems);

allListItems.forEach(function (item) {
  console.log(item.innerText);
});

// Select using a data attribute:
const img = document.querySelector("[data-custom-image-name]");
//console.log(img);

// Select By Class Name:
const paragraphByClassName = document.getElementsByClassName("paragraph");
console.log(paragraphByClassName);

// EVENT HANDLING:
function headingListener() {
  console.log("You clicked the heading");
}

const headingListenerEs6 = () => {
  console.log("You click heading in ES6 land");
};

function paraHover() {
  console.log("You hovered over the paragraph");
}

const listAdderBtn = document.getElementById("listAdderBtn");

// Fetch the list:
const numberList = document.querySelector(".number-list");

listAdderBtn.addEventListener("click", function () {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  // listItem.id = 'myNewId';

  listItem.innerHTML = Math.floor(Math.random() * 5);

  numberList.appendChild(listItem);
});

const commentsBox = document.getElementById("comments");

function validateComments(event) {
  const currentInput = event.target.value;
  const numbersRE = /\d/;

  console.log(currentInput);

  if (numbersRE.test(currentInput)) {
    // bad input - receieved numbers
    commentsBox.classList.add("error");
    commentsBox.classList.remove("good");
  } else {
    commentsBox.classList.add("good");
    commentsBox.classList.remove("error");
  }
}

commentsBox.addEventListener("keyup", validateComments);
