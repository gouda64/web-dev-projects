let playerScore = 0;
let computerScore = 0;

let summText = document.querySelector(".summ-text");

let buttons = document.querySelector(".options").childNodes;
buttons.forEach(button => button.addEventListener("click", function() {
    playRound(this.className, getComputerChoice());
}));

let humanScoreText = document.querySelector(".score .human");
let robotScoreText = document.querySelector(".score .robot");

let restartButton = document.querySelector(".restart");
restartButton.addEventListener("click", restart);

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
    if (playerScore === 5 || computerScore === 5) return;

    if (playerSelection === computerSelection) {
        summText.textContent = `You both picked ${playerSelection}, so it's a tie! Try again!`;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"
            || playerSelection === "scissors" && computerSelection === "paper"
            || playerSelection === "paper" && computerSelection === "rock") {
        summText.textContent = `Since ${playerSelection} beats ${computerSelection}, you lost this round 😢`;
        computerScore++;
        robotScoreText.textContent = computerScore;  
    } 
    else {
        summText.textContent = `Since ${computerSelection} beats ${playerSelection}, you won this round!`;
        playerScore++;
        humanScoreText.textContent = playerScore;
    }

    if (playerScore === 5) {
        summText.textContent = "Yay, you won! Click restart to play again";
        restartButton.classList.toggle("hidden");
    }
    else if (computerScore === 5) {
        summText.textContent = "Oh no, you lost! Click restart to play again";
        restartButton.classList.toggle("hidden");
    }
}

function restart() {
    playerScore = 0;
    computerScore = 0;
    humanScoreText.textContent = "0";
    robotScoreText.textContent = "0";
    summText.textContent = "Select rock, paper, or scissors to start the game. First to 5 wins!";
    restartButton.classList.toggle("hidden");
}