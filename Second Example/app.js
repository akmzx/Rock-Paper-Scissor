const computerChoiceDisplay = document.createElement("h1");
const userChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
const choices = ["rock", "paper", "scissor"];
gameGrid.append(computerChoiceDisplay, userChoiceDisplay, resultDisplay);

let userChoice;
let computerChoice;

const displayChoice = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = "User Choice: " + userChoice;
  generateComputerChoice();
  displayResult();
};

const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = "Computer Choice: " + computerChoice;
  console.log("hi");
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];
  gameGrid.appendChild(button);
  button.addEventListener("click", displayChoice);
}

const displayResult = () => {
  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "scissorpaper":
    case "paperrock":
      resultDisplay.innerHTML = "You Win!";
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      resultDisplay.innerHTML = "You Lose!";
      break;
    default:
      resultDisplay.innerHTML = "It's a Draw!";
      break;
  }
};
