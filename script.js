"use strict";

<<<<<<< HEAD
// Generate a random secret number between 1 and 20
=======
>>>>>>> 78a209a (Initial commit)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

<<<<<<< HEAD
// Function to update the message on the screen
=======
>>>>>>> 78a209a (Initial commit)
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

<<<<<<< HEAD
// Event listener for the "Check" button
=======
>>>>>>> 78a209a (Initial commit)
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

<<<<<<< HEAD
  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When the player wins
=======
  if (!guess) {
    displayMessage("⛔️ No number!");
>>>>>>> 78a209a (Initial commit)
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;

<<<<<<< HEAD
    // Change background and number box style
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Update highscore if necessary
=======
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

>>>>>>> 78a209a (Initial commit)
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
<<<<<<< HEAD

    // When the guess is incorrect
=======
>>>>>>> 78a209a (Initial commit)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

<<<<<<< HEAD
// Event listener for the "Again" button to reset the game
=======
>>>>>>> 78a209a (Initial commit)
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

<<<<<<< HEAD
  // Reset UI elements to the initial state
=======
>>>>>>> 78a209a (Initial commit)
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
