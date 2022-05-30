let playerScore = 0;
let computerScore = 0;

const message = document.querySelector("#message");
const winnerArea = document.querySelector("#winner");

document.querySelectorAll(".rps-button").forEach(function (button) {
  button.addEventListener("click", playRound);
});

document.querySelector("#reset-button").addEventListener("click", reset);
reset(); // reset to initialize game

function playRound(e) {
  if (computerScore === 5 || playerScore === 5) {
    reset();
    playRound(e);
    return;
  }

  const playerSelection = e.target.id;
  const computerSelection = computerPlay();

  // flag to determine message to return
  let playerWins = false;
  if (playerSelection === computerSelection) {
    message.textContent = "Tie!";
    return;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerWins = true;
  } else {
    playerWins = false;
  }

  if (playerWins) {
    ++playerScore;
    updateScores();

    message.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    if (playerScore === 5) {
      winnerArea.textContent = "you win";
      // alert("You Win!");
    }
  } else {
    ++computerScore;
    updateScores();

    message.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    if (computerScore === 5) {
      winnerArea.textContent = "computer wins";
      // alert("computer wins!");
    }
  }
}

function updateScores() {
  document.querySelector("#computer-score").textContent = computerScore;
  document.querySelector("#player-score").textContent = playerScore;
}

function computerPlay() {
  // return randomly rock, paper or scissors
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "scissors";
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  message.textContent = "Make a play to start";
  winnerArea.textContent = "";
}
