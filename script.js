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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let input = prompt("Please enter either rock, paper, or scissors").toLowerCase();
        while (input !== "rock" && input !== "paper" && input !== "scissors") {
            console.log("You entered an invalid input, please try again");
            input = prompt("Please enter either rock, paper, or scissors").toLowerCase();
        }
        const comp = getComputerChoice();
        let result = playRound(input, comp);
        if (result > 0) {
            playerScore++;
            console.log(`Since ${input} beats ${comp}, you won this round!`);
        }
        else if (result < 0) {
            computerScore++;
            console.log(`Since ${comp} beats ${input}, you lost this round :(`);
        }
        else {
            console.log(`You both picked ${input}, so it's a tie!`);
            i--;
        }
        console.log(`You now have ${playerScore} and the computer has ${computerScore}`);
    }
    const msg = playerScore > computerScore ? `You won ${playerScore} to ${computerScore}` : `You lost ${playerScore} to ${computerScore}`;
    console.log(msg);
}