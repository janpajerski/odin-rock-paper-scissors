"use strict";

/* Game of rock, paper, scissors played between a human user and the computer
   The game is 5 rounds long, after which a winner or tie is declared. */

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

function getComputerChoice() {
  let computerChoice = "";
  let randomNum = Math.random();
  if (randomNum < 1 / 3) {
    computerChoice = "Rock";
  } else if (randomNum < 2 / 3) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter your choice—Rock, Paper, or Scissors: "
  );

  return humanChoice[0]
    .toUpperCase()
    .concat(humanChoice.slice(1).toLowerCase()); // Make input case insensitive
}

function playRound(humanChoice, computerChoice) {
  let roundMessage = "";
  roundCount += 1;

  // Determine the round winner, or a tie
  if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    roundMessage = `You win the round! ${humanChoice} beats ${computerChoice}.`;
    humanScore += 1;
  } else if (
    (computerChoice === "Rock" && humanChoice === "Scissors") ||
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Scissors" && humanChoice === "Paper")
  ) {
    roundMessage = `You loose the round! ${computerChoice} beats ${humanChoice}.`;
    computerScore += 1;
  } else {
    roundMessage = `It's a tie! You both chose ${humanChoice}`;
  }

  console.log(roundMessage);
  // The result after the 5th round is declared in the playGame function.
  if (roundCount < 5) {
    console.log(
      `The score after round ${roundCount}: You - ${humanScore}, Computer - ${computerScore}`
    );
  }
}

// Using recursion, play five rounds of the game and output the result

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

// Using a for loop, play five rounds of the game and output the result

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(
    `The final score after ${roundCount} rounds: You - ${humanScore}, Computer - ${computerScore}`
  );
  if (humanScore > computerScore) {
    console.log("Congratulations! You win!!");
  } else if (computerScore > humanScore) {
    console.log(`Tough break, you loose :(`);
  } else {
    console.log(`Great battle, it finished in a tie!`);
  }
}
