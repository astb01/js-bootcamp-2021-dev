const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", function () {
  console.log(this);
});

/* 
There is no binding to the 'this' keyword when
you use a arrow function 
*/
// myBtn.addEventListener("click", () => {
//   console.log(this);
// });

const sayHello = () => `hello`;
