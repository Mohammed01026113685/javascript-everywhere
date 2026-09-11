const name = document.getElementById("name");
const changeTextButton = document.getElementById("TextButton");
const consoleButton = document.getElementById("Button");

changeTextButton.addEventListener("click", function () {
  name.textContent = "Welcome to my JavaScript journey!";
});

consoleButton.addEventListener("click", function () {
  console.log("The console button was clicked!");
});