# odin-rock-paper-scissors

<p>This is my first JavaScrip project built from scratch and is part of the Odin Project. I am using this readme file to record my project notes and my thought process. I learned about how programmers think and problem solve (at least how you should) and I will follow the process pretty rigidly so it gets ingrained. Bear with me here, as it's probably overkill given the level of difficulty :)</p>

<p>In short, the process is:
<ol> 
    <li>Understand the problem</li>
    <li>Make a Plan</li>
    <li>Implement</li>
</ol></p>

<h1>Understand the Problem</h1>
<p>Make a simple implementation of rock paper scissors where the player plays against the computer from the console. The game will be five rounds. After each round, the winner and loser for the round are declared. The score is kept and a winner is declared after five rounds.</p>

<p>NOTE: 5 rounds doesn't make sense to me. It should be the first to 3, to 5, etc. It looks like this will be addressed later when we revisit the project later in the course.</p>

<p>The game is a two player "duel". In each round, both players draw rock, paper or scissors. Rock beats scissors, paper beats rock, and scissors beat paper.</p>

<h1>Make a Plan</h1>
I am foregoing to Odin project instructions to see if I can complete this thinking on my own. Obviously, the function names will likely be a little different.
<h2>Questions</h2>
<h3>Is there a user interface?</h3>
- No.
<h3>What inputs will the program have?</h3>
- A user input each round: rock, paper, or scissors. <br>
- A computer generated input each round: rock, paper, or scissors. <br>
<h3>What is the desired output?</h3>
- The winner of each round. <br>
- The updated score after each round.<br>
- The winner of the game after five rounds.<br>
<h3>Given the inputs, what are the steps necessary to return the desired output, or another way, what are the sub-problems that need to be solved?</h3>
In no particular order:
- How to randomly generate rock, paper, or scissors? <br>
- How to ask the user to enter rock, paper, or scissors? <br>
- How to compare the computer generated value to the user entry to determine a winner for the round? <br>
- How to output the winner and score after each round? <br>
- How to output the winner of the game after 5 rounds? <br>
- How to group the above problems into functions?

<h2>Approach</h2>
Since we haven't used loops to this point, I will use recursion only and use totalScore === 5 as the 'exit' condition.
I'm thinking three functions:
- rockPaperScissors encompasses the preamble game play and resetting if the user wants to play again. <br>
- fiveRoundGame is game play <br>
- computerSelection is the random "rock, paper, or scissors" generator

<h2>Pseudocode</h2>





