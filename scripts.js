"use strict";

// Initialize Global Variables to track player and computer scores
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;


// Randomly generate the computer selection of Rock, Paper or Scissors
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

// Get the players selection of Rock, Paper, or Scissors. The player input is case insensitive; however, the assumption is that the input is correctly spelled.
function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice—Rock, Paper, or Scissors: ");
    
    return(humanChoice[0].toUpperCase().concat(humanChoice.slice(1).toLowerCase()));
}

// Play one round of "Rock, Paper, Scissors" with `humanChoice` and `computerChoice` representing the choice each players choice. 
function playRound(humanChoice, computerChoice){
    // Declare variable `roundMessage` of type String and empty.
    let roundMessage = "";

    // Increment the round count by one
    roundCount += 1;

    // Outline conditions for the human winner, computer winner and a tie and pass the message to roundMessage.
    if (humanChoice === "Rock" && computerChoice === "Scissors" || humanChoice === "Paper" && computerChoice === "Rock" || humanChoice === "Scissors" && computerChoice === "Paper") {
        roundMessage = `You win the round! ${humanChoice} beats ${computerChoice}.`;
        humanScore += 1;
    } else if (computerChoice === "Rock" && humanChoice === "Scissors" || computerChoice === "Paper" && humanChoice === "Rock" || computerChoice === "Scissors" && humanChoice === "Paper") {
        roundMessage = `You loose the round! ${computerChoice} beats ${humanChoice}.`;
        computerScore += 1;
    } else {
        roundMessage = `It's a tie! You both chose ${humanChoice}`;
    }

    // Output the message to the console after each round.
    console.log(roundMessage);
    if (roundCount < 5){
        console.log(`The score after round ${roundCount}: You - ${humanScore}, Computer - ${computerScore}`);
    }
}

// Using recursion, play five rounds of Rock, Paper, Scissors. Output the final score and declare the winner, or a tie.

/* function playGame(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if (roundCount < 5){
        playGame();
    } else {
        console.log(`The final score after ${roundCount} rounds: You - ${humanScore}, Computer - ${computerScore}`);
        if (humanScore > computerScore){
            console.log('Congratulations! You win!!');
        } else if (computerScore > humanScore){
            console.log(`Tough break, you loose :(`);
        } else {
            console.log(`Great battle, it finished in a tie!`);
        }
    }
} */

// Using a for loop, as shown in the problem solving Fizz Buss example, play five rounds of Rock, Paper, Scissors. Output the final score and declare the winner, or a tie.

function playGame(){

    // Play five rounds of Rock, Paper, Scissors
    for (let i = 1; i <= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Ouput the final score and declare a winner, or tie, after all five rounds
    console.log(`The final score after ${roundCount} rounds: You - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore){
        console.log('Congratulations! You win!!');
    } else if (computerScore > humanScore){
        console.log(`Tough break, you loose :(`);
    } else {
        console.log(`Great battle, it finished in a tie!`);
    }
}