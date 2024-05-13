// LOGIC TO GET THE COMPUTER CHOICE

function getComputerChoice() {
    const randomNumber = Math.random();
    let computerChoice;
    if (randomNumber< 0.33) {
        computerChoice = "rock";
    } else if (randomNumber< 0.66){
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }

    return computerChoice;
}

// LOGIC TO GET THE HUMAN CHOICE

function getHumanChoice(){
    let humanChoice =  prompt("Rock, Paper or Scissors");

    return humanChoice.toLowerCase();
}

// DECLARING PLAYERS SCORE VARIABLES

let humanScore = 0;
let computerScore = 0;
let tie = 0;

//LOGIC TO PLAY A SINGLE ROUND

function playRound(humanChoice, computerChoice) {

    console.log(`You chose: ${humanChoice} | Computer chose: ${computerChoice}`)

    if(humanChoice === "rock" && computerChoice === "rock"){
        tie++;
        console.log(`It's a tie!`);
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log(`You lose`);
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log(`You win!`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log(`You win!`);
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        tie++;
        console.log(`It's a tie!`);
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log(`You lose`);
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        console.log(`You lose`);
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log(`You win!`);
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        tie++;
        console.log(`It's a tie!`);
    } else {
        console.log(`Input a valid word`);
    }
}


//LOGIC TO PLAY THE ENTIRE GAME

function playGame() {
    let i = 0;
    
    while (i < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
    console.log("--RESULTS--")
    if(humanScore> computerScore){
        console.log(`You win! Your points: ${humanScore}`);
    } else if(computerScore> humanScore){
        console.log(`You lose! Your points: ${computerScore}`);
    } else {
        console.log(`It's a tie! Your points: ${computerScore}`);
    }
}

playGame();



