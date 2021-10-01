console.log("Dom Refresher");

const fruitDropDown = document.getElementById("fruitsId");
const mainHeading = document.getElementById("main-heading");
const message = document.querySelector(".message");

fruitDropDown.addEventListener("change", function (event) {
  const selectedValue = event.target.value;

  if (selectedValue !== "-1") {
    console.log(selectedValue);
  }
});

message.innerHTML = "Bye";
