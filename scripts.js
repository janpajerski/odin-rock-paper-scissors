"use strict";

// Initialize Global Variables to track player and computer scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice ="";
    let randomNum = Math.random();
    if (randomNum < 1/3){
        computerChoice = "Rock";
    } else if (randomNum < 2/3) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return(computerChoice);
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice—Rock, Paper, or Scissors: ");
    
    return(humanChoice[0].toUpperCase().concat(humanChoice.slice(1).toLowerCase()));
}

// Call function `playRound` with two arguments `humanChoice` and `computerChoice` representing the choice each player makes in a game of rock, paper, scissors.
function playRound(humanChoice, computerChoice){
    // Declare variable `roundMessage` of type String and empty.
    let roundMessage = "";

    // Outline conditions for the human winner, computer winner and a tie and pass the message to roundMessage.
    if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper") {
        roundMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    } else if (computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper") {
        roundMessage = `You loose! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
    } else {
        roundMessage = `It's a tie! You both chose ${humanChoice}`;
    }

    // Output the message to the console
    console.log(roundMessage);
    console.log(`You: ${humanScore}, Computer: ${computerScore}`);
}


