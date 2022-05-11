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

function fiveRounds(roundNum, compScore, userScore){
    console.log('This is round', roundNum);
    roundNum++;
    if (roundNum < 6) {
        let userInput = userPick();
        let compInput = computerPick();
        // console.log('You picked: ', userInput, 'The computer picked: ', compInput)
        if (userInput === compInput){
            console.log('It\'s a tie, you both drew: ', userInput);
            console.log('The score is you ', userScore, ' - ', compScore, ' computer.');
            return fiveRounds(roundNum, compScore, userScore);
        } else {return fiveRounds(roundNum, compScore, userScore);}
    } else {
        return 'We\'re out after ' + roundNum + ' rounds!';
    }

}

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