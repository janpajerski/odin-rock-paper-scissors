# odin-rock-paper-scissors

This is my first JavaScrip project built from scratch and is part of the Odin Project. I am using this readme file to record my project notes and my thought process. I learned about how programmers think and problem solve (at least how you should) and I will follow the process pretty rigidly so it gets ingrained. Bear with me here, as it's probably overkill given the level of difficulty :)

In short, the process is:
1. Understand the problem
2. Make a Plan
3. Implement

# Understand the Problem
Make a simple implementation of rock paper scissors where the player plays against the computer from the console. The game will be five rounds. After each round, the winner and loser for the round are declared. The score is kept and a winner is declared after five rounds.

NOTE: 5 rounds doesn't make sense to me. It should be the first to 3, to 5, etc. It looks like this will be addressed later when we revisit the project later in the course.

The game is a two player "duel". In each round, both players draw rock, paper or scissors. Rock beats scissors, paper beats rock, and scissors beat paper.

# Make a Plan
I am foregoing to Odin project instructions to see if I can complete this thinking on my own. Obviously, the function names will likely be a little different.

## Questions
### Is there a user interface?
- No.
<h3>What inputs will the program have?</h3>
- A user input each round: rock, paper, or scissors. <br>
- A computer generated input each round: rock, paper, or scissors. <br>
<h3>What is the desired output?</h3>
- The winner of each round. <br>
- The updated score after each round.<br>
- The winner of the game after five rounds.<br>
<h3>Given the inputs, what are the steps necessary to return the desired output, or another way, what are the sub-problems that need to be solved?</h3>
In no particular order:<br>
- How to randomly generate rock, paper, or scissors? <br>
- How to ask the user to enter rock, paper, or scissors? <br>
- How to compare the computer generated value to the user entry to determine a winner for the round? <br>
- How to output the winner and score after each round? <br>
- How to output the winner of the game after 5 rounds? <br>
- How to group the above problems into functions?

<h2>Approach</h2>
<p>Since we haven't used loops to this point, I will use recursion only and use totalScore === 5 as the 'exit' condition.</p>
I'm thinking three functions:<br>
- rockPaperScissors encompasses the preamble game play and resetting if the user wants to play again. <br>
- fiveRoundGame is game play <br>
- computerSelection is the random "rock, paper, or scissors" generator

<h2>Pseudocode</h2>

function computerSelection { <br>
    randint = randomly generate a number between 1 and 3<br>
    switch (randint)<br>
        case 1: return 'rock'; break;<br>
        case 2: return 'paper'; break;<br>
        case 3: return 'scissors'; break;<br>
}<br>

function fiveRounds {roundNum, compScore, playerScore}<br>
    if roundNum < 5;<br>
        Output the round number. <br>
        get userInput of either rock, paper, or scissors<br>
            If input is incorrect, ask to reenter input<br>
        make sure input is all lower case<br>
        compInput === call randInt() to generate computer input<br>
        if userInput === compInput<br>
            roundNum++;<br>
            Output "it's a tie, you both drew -----"<br>
            Output "The score is you # - # computer"<br>
            Call function fiveRounds(roundNum,compScore,playerScore)<br>
        elseif ((userInput === rock && compInput === scissors) OR<br>
               (userInput === paper && compInput === rock) OR<br>
               (userInput === scissors && compInput == paper))<br>
            roundNum++;<br>
            playerScore++<br>
            Output "User drew --- and comp dres ---. User wins!<br>
            Output "The score is you # - # computer"<br>
            Call function fiveRounds(roundNum,compScore, playerScore)<br>
        elseif ((compInput === rock && userInput === scissors) OR<br>
               (compInput === paper && userInput === rock) OR<br>
               (compInput === scissors && userInput == paper))<br>
            roundNum++;<br>
            compScore++
            Output "User drew --- and comp dres ---. Computer wins!
            Output "The score is you # - # computer"
            Call function fiveRounds(roundNum, compScore, playerScore)
        else
            return compScore, playerScore;
}

function rockPaper {
    call function fiveRounds and return compScore and playerScore
    if compScore > playerScore
        output 'Computer wins!: compScore - playerScore'
    elseif playerScore > compScore
        output 'Player wins! playerScore - compScore'
    else 'It's a tie. playerScore - compScore'
    Ask Do you want to play again?
        If yes rockPaper()
        if not return 'Thanks for playing'
}

rockPaper()

<h1>Implement</h1>
<p>Remember to divide and conquer!!!</p>



