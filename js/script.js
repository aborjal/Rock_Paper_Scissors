// LOGIC TO GET THE COMPUTER CHOICE

function getComputerChoice() {
    const randomNumber = Math.random();
    let computerChoice;
    if (randomNumber< 0.33) {
        computerChoice = "Rock";
    } else if (randomNumber< 0.66){
        computerChoice = "Paper";
    } else{
        computerChoice = "Scissors";
    }

    return computerChoice;
}

// LOGIC TO GET THE HUMAN CHOICE

function getHumanChoice(){
    let humanChoice =  prompt("Rock, Paper or Scissors");

    return humanChoice;
}

// DECLARING PLAYERS SCORE VARIABLES

let humanScore = 0;
let computerScore = 0;

//LOGIC TO PLAY A SINGLE ROUND

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice === "rock" && computerChoice === "rock"){
        return `It's a tie!`;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        return `You lose`;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        return `You win!`;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return `You win!`;
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        return `It's a tie!`;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        return `You lose`;
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        return `You lose`;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        return `You win!`;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return `It's a tie!`;
    }

}






