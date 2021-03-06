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
I am foregoing the Odin project instructions to see if I can complete this thinking on my own. Obviously, the function names will likely be a little different.

## Questions
### Is there a user interface?
- No.

### What inputs will the program have?
- A user input each round: rock, paper, or scissors.
- A computer generated input each round: rock, paper, or scissors.

### What is the desired output?
- The winner of each round.
- The updated score after each round.
- The winner of the game after five rounds.

### Given the inputs, what are the steps necessary to return the desired output, or another way, what are the sub-problems that need to be solved?
In no particular order:
- How to randomly generate rock, paper, or scissors?
- How to ask the user to enter rock, paper, or scissors?
- How to compare the computer generated value to the user entry to determine a winner for the round?
- How to output the winner and score after each round?
- How to output the winner of the game after 5 rounds?
- How to group the above problems into functions?

## Approach
Since we haven't used loops to this point, I will use recursion only and use totalScore === 5 as the 'exit' condition.

I'm thinking three functions:
- rockPaperScissors encompasses the preamble game play and resetting if the user wants to play again.
- fiveRoundGame is game play
- computerSelection is the random "rock, paper, or scissors" generator

## Pseudocode

```
function computerSelection {
    randint = randomly generate a number between 1 and 3
    switch (randint)
        case 1: return 'rock'; break;
        case 2: return 'paper'; break;
        case 3: return 'scissors'; break;
}

function fiveRounds (roundNum, compScore, playerScore){
    if roundNum < 5;
        Output the round number.
        get userInput of either rock, paper, or scissors
            If input is incorrect, ask to reenter input
        make sure input is all lower case
        compInput === call randInt() to generate computer input
        if userInput === compInput
            roundNum++;
            Output "it's a tie, you both drew -----"
            Output "The score is you # - # computer"
            Call function fiveRounds(roundNum,compScore,playerScore)
        elseif ((userInput === rock && compInput === scissors) OR
               (userInput === paper && compInput === rock) OR
               (userInput === scissors && compInput == paper))
            roundNum++;<br>
            playerScore++<br>
            Output "User drew --- and comp dres ---. User wins!
            Output "The score is you # - # computer"<br>
            Call function fiveRounds(roundNum,compScore, playerScore)
        elseif ((compInput === rock && userInput === scissors) OR
               (compInput === paper && userInput === rock) OR
               (compInput === scissors && userInput == paper)
            roundNum++;
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
```

# Implement
Remember to divide and conquer!!!

### computerSelection function
This is simple enough so there's no need to separate into smaller steps. 
Used Math.floor and Math.random() to generate a number between 1 and 3.
Used a switch statement to return rock, paper or scissors, based on the generated number.

### fiveRounds function
I will break down this function into smaller problems.

**Get recursive function call working:**
My approach to the fiveRounds function relies on a recursive function call so the first *small problem* I'm going to solve is getting this to work.

I ran into a roadblock as the function returned undefined. I found out that all calls of the function must return something, even when you're simply calling the function itself. I made the modification and the recursive function call works.

**Get user input working:**
I've broken this into a few smaller parts
- [x] Change input to lower case. 
- [x] Validate that user input is rock, paper, or scissors
    - [x] If not, ask user to re-enter input

**Assemble the function**
- [x] consol.log the round number
- [x] Call computerSelection function and assign output to variable
- [x] Call playerSelections function and assign output to variable
- [x] Determine the round winner based on the computer and player selections, updated the score, and output the appropriate messages
    - [x] Tie
    - [x] Computer wins
    - [x] Player wins

Done! The game is working in the console. 

# Compare to TOP 
The above notes were from writing the game from scratch. TOP provided guidance so I then followed their guided approach. My code is in script.js and the code following TOP's guidance is in odin-script.js.

The main differences between the TOP guided version and my own are:
1. In my version, I used recursion to play five rounds, while TOPs version used a loop. 
2. TOPs version has a 'game' function that calls each 'round' and returns an output message --> the scores are updated and winner is determined from within the game function. My version has a 'game' function that calls a five round play and returns the final scores --> the game function outputs messages based on the scores. 

Both approaches work, underscoring how there are many ways to arrive at a solution and many solutions to a problem. Stylistically, I think that the top version is 'better'...whatever that means. 

What a great exercise! It was fun.





