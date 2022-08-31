function getComputerChoice() {
    const rand = Math.floor(Math.random()*3);
    if (rand === 0) {
        return "rock";
    }
    else if (rand === 1) {
        return "paper";
    }
    else if (rand === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 0;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"
            || playerSelection === "scissors" && computerSelection === "paper"
            || playerSelection === "paper" && computerSelection === "rock") {
        return 1;  
    }
    else {
        return -1;
    }
}