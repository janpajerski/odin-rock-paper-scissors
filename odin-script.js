// Generate a random pick by the computer
function computerPlay(){
    switch (Math.floor(Math.random() * 3) + 1){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
    }

}

// Prompt the player to select rock, paper, or scissors
function playerPlay(){
    let userInput = prompt('Make your pick: rock, paper, or scissors!').trim().toLowerCase();
    // Make sure input is spelled correctly
    if(['rock', 'paper', 'scissors'].includes(userInput)){
        return userInput;
    } else {
        alert('Incorrect input. Please try again.');
        return playerPlay();
    }

}

function singleRound(){
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection){
        return ('It\'s a Tie! You both selected ' + playerSelection.toUpperCase());
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return ('You Win! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection.toUpperCase());
    } else {
        return ('You Lose! ' + computerSelection.toUpperCase() + ' beats ' + playerSelection.toUpperCase());
    } 
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        console.log('***Round', i,'***');
        let roundResult = singleRound();
        console.log(roundResult);
        if (roundResult.includes('Tie')){
            console.log('The score is you',playerScore,'-',computerScore,'computer.');
        } else if (roundResult.includes('Win')){
            playerScore++;
            console.log('The score is you',playerScore,'-',computerScore,'computer.');
        } else {
            computerScore++;
            console.log('The score is you',playerScore,'-',computerScore,'computer.');
        }
    }

    // Output final score message.
    if (playerScore === computerScore) {
        console.log('After five rounds, it\'s a tie.');
    } else if (playerScore > computerScore) {
        console.log('After five rounds, you win!');
    } else {console.log('After five rounds, the computer wins!')}

    // End the game or replay.
    if (confirm('Do you want to play again?')){
        return game();
    } else {return console.log('Thanks for playing!')}
}