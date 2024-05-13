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

/* console.log(getComputerChoice()); */

// LOGIC TO GET THE HUMAN CHOICE

function getHumanChoice(){
    let humanChoice =  prompt("Rock, Paper or Scissors");

    return humanChoice;
}

/* console.log(getHumanChoice()); */





