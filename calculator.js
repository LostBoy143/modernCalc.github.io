console.log("Signing in...");

const displayScreen =
  document.querySelector("#display");

function display(input) {
  displayScreen.value += input;
}
function clearScreen() {
  if (displayScreen.value == "ERROR") {
    displayScreen.value = "";
  } else {
    displayScreen.value = displayScreen.value
      .toString()
      .slice(0, -1);
  }
}
function calculate() {
  try {
    displayScreen.value = eval(
      displayScreen.value
    );
  } catch (error) {
    displayScreen.value = "ERROR";
  }
}
