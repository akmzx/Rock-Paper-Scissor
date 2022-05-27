const choicesDisplay = document.querySelector("#choices");
const resultDisplay = document.querySelector("#result");

const choices = ["rock", "paper", "scissor"];

const handleClick = (e) => {
  getResult(
    e.target.innerHTML,
    choices[Math.floor(Math.random() * choices.length)]
  );
};

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResult = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "rockscissor":
    case "scissorpaper":
    case "paperrock":
      resultDisplay.innerHTML =
        "You chose " +
        userChoice +
        " and Computer chose " +
        computerChoice +
        " You Win!";
      break;
    case "rockpaper":
    case "scissorrock":
    case "paperscissor":
      resultDisplay.innerHTML =
        " You chose " +
        userChoice +
        " and Computer chose " +
        computerChoice +
        " You Lose!";
    default:
      resultDisplay.innerHTML =
        " You chose " +
        userChoice +
        " and Computer chose " +
        computerChoice +
        " It's a Draw!";
      break;
  }
};
