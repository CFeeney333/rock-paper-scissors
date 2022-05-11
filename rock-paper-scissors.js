function computerPlay() {
    // return randomly rock, paper or scissors
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
        default:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // compare selections and return string declaring winner

    // We will work with lower case, and we want to accept mixed case from the user
    playerSelection = playerSelection.toLowerCase();

    // flag to determine message to return
    let playerWins = false;
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins = true;
    } else {
        playerWins = false;
    }

    if (playerWins) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`; 
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Rock, paper, or scissors:"), computerPlay()));  
    }
}

game();