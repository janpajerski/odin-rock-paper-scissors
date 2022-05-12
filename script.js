// Generate a random pick by the computer
function computerPick(){
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

// Ask the user to enter a pick
function userPick(){
    let userInput = prompt('Make your pick: rock, paper, or scissors!').trim().toLowerCase();
    // Make sure input is spelled correctly
    if(['rock', 'paper', 'scissors'].includes(userInput)){
        return userInput;
    } else {
        alert('Incorrect input. Please try again.');
        return userPick();
    }

}

// Play rock paper scissors for five rounds
function fiveRounds(roundNum, compScore, userScore){
    roundNum++;
    if (roundNum < 6) {
        console.log('This is round', roundNum);
        let userInput = userPick();
        let compInput = computerPick();
        if (userInput === compInput){
            console.log('It\'s a tie, you both drew: ', userInput);
            console.log('The score is you ', userScore, ' - ', compScore, ' computer.');
            return fiveRounds(roundNum, compScore, userScore);
        } else if ((userInput === 'rock' && compInput === 'scissors') || (userInput === 'paper' && compInput === 'rock') || (userInput === 'scissors' && compInput === 'paper')) {
            console.log('You drew', userInput, 'and the computer drew', compInput, '-- you win!');
            userScore++;
            console.log('The score is you ', userScore, ' - ', compScore, ' computer.');
            return fiveRounds(roundNum, compScore, userScore);
        } else {
            console.log('You drew', userInput, 'and the computer drew', compInput, '-- the computer wins!');
            compScore++;
            console.log('The score is you ', userScore, ' - ', compScore, ' computer.');
            return fiveRounds(roundNum, compScore, userScore);
        } 
    } else {
        return [compScore, userScore];
    }
}

// Play the game
function rockPaperScissors() {
    // Call the five rounds function.
    let scores = fiveRounds(0,0,0);
    if (scores[0] === scores[1]){
        console.log('After five rounds, it\'s a tie.');
    } else if (scores[0] > scores[1]) {
        console.log('After five rounds, the computer wins!');
    } else {console.log('After five rounds, you win!')}

    // End the game or replay.
    if (confirm('Do you want to play again?')){
        return rockPaperScissors();
    } else {return console.log('Thanks for playing!')}
}

