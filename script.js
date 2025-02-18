// Function with parameters and return values
function calculateArea(length, width) {
  return length * width;
}

// Function demonstrating the concept of scope
let globalVariable = "I am global";

function demonstrateScope() {
  let localVariable = "I am local";
  console.log(globalVariable); // Accessible
  console.log(localVariable); // Accessible
}

// Function to toggle a CSS class that applies an animation
function toggleAnimation() {
  const element = document.querySelector(".box");
  element.classList.toggle("rotate");
}

// Function to toggle a CSS class that applies an animation
function toggleModal() {
  const modal = document.querySelector(".modal");
  modal.classList.toggle("hidden");
}

// Function to change the color of all buttons
function changeColor() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.style.backgroundColor =
      button.style.backgroundColor === "red" ? "blue" : "red";
  });
}

// Function to trigger and control CSS animations dynamically
function triggerAnimation() {
  const element = document.querySelector(".animated-element");
  element.classList.toggle("animate");
}

// Ensure the animation resets properly when triggered multiple times
document
  .querySelector(".animated-element")
  .addEventListener("animationend", () => {
    const element = document.querySelector(".animated-element");
    element.classList.remove("animate");
  });

// Function to trigger card animation
function triggerCardAnimation() {
  const card = document.querySelector(".animated-card");
  card.classList.toggle("animate-card");
}

// Function to trigger slider animation
function triggerSliderAnimation() {
  const slider = document.querySelector(".animated-slider");
  slider.classList.toggle("animate-slider");
}

// Function to trigger ball animation
function triggerBallAnimation() {
  const ball = document.querySelector(".animated-ball");
  ball.classList.toggle("animate-ball");
}
