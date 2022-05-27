const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }

  if (randomNumber === 2) {
    computerChoice = "paper";
  }

  if (randomNumber === 3) {
    computerChoice = "scissor";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (userChoice === computerChoice) {
    resultDisplay.innerHTML = "It's a Draw!";
  }

  if (userChoice === "rock" && computerChoice === "scissor") {
    resultDisplay.innerHTML = "You Win!";
  }

  if (userChoice === "paper" && computerChoice === "rock") {
    resultDisplay.innerHTML = "You Win!";
  }

  if (userChoice === "scissor" && computerChoice === "paper") {
    resultDisplay.innerHTML = "You Win!";
  }

  if (userChoice === "rock" && computerChoice === "paper") {
    resultDisplay.innerHTML = "You Lose!";
  }
  if (userChoice === "paper" && computerChoice === "scissor") {
    resultDisplay.innerHTML = "You Lose!";
  }
  if (userChoice === "scissor" && computerChoice === "rock") {
    resultDisplay.innerHTML = "You Lose!";
  }
}
