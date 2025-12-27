"use strict";

function getComputerChoice(){
    let computerChoice ="";
    let randomNum = Math.random();
    if (randomNum < 1/3){
        computerChoice = "rock";
    } else if (randomNum < 2/3) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return(computerChoice);
}

function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice—rock, paper, or scissors: ");
    
    return(humanChoice);
}