// Storage: cookies, localStorage and sessionStorage

// Local Storage:

// Adding a new item to local storage:
localStorage.setItem("name", "foo");
localStorage.setItem("sport", "rugby");

// Retrieve 'sport' from storage:

const sportValue = localStorage.getItem("sport");
console.log(sportValue);

// Adding an array to storage:
const countries = ["france", "germany"];

localStorage.setItem("countries", JSON.stringify(countries));

const countriesFromStorage = JSON.parse(localStorage.getItem("countries"));

console.log("countriesFromStorage", countriesFromStorage);

// Adding an object:

const product = {
  name: "Can of coke",
  price: 12.0,
};

localStorage.setItem("product", JSON.stringify(product));

const productFromStorage = JSON.parse(localStorage.getItem("product"));
console.log("productFromStorage", productFromStorage);

localStorage.removeItem("product");
localStorage.removeItem("name");
localStorage.removeItem("sport");
localStorage.removeItem("countries");

// Session Storage:

sessionStorage.setItem("id", 12345678);

// same principles apply for storing arrays and objects in session storage (As above)

// Cookies:
document.cookie =
  `name=John Doe; expires=` + new Date(2025, 0, 1).toUTCString();
