# Project Notes

I will use this file for project notes. Since I'm just learning, I will explicitly go through the problem solving steps as outlined in The Odin Project.

It's worth noting that the project instructions break the proble (creating a rock, paper, scissors game where the user plays against the commputer) into small problems which are the steps in the instructions. I attempt to break down these small problems into even smaller problems to practice the problem solving process. Admittedly I'm stretching things a bit as the small problems are already pretty bite sized. All good though!!

## Step 2: Write the logic to get the computer choice.
1. Understand the Problem
    - Create a function named `getComputerChoice` that randomly `return`'s one of the following string values: "rock", "paper", or "scissors". 
2. Plan
    - Does this function have a user intervace? **No**
    - What inputs will this function have? **None**
    - What is the desired output?
        - One of the following string outputs "rock", "paper", or "scissors"
    - What are the steps necessary to return the desired output?
        Call function `getComputerChoice`
        Create a variable called `computerChoice` of type `string` with an which is empty.
        Create a variable called `randomNum` of type `Number` with a random value greater or equal to zero and less than one. Generate this random value using the `Math.random` method.
        If `randomNum` is less than 1/3
            assign `computerChoice` a value of "rock"
        else if `randomNum` is less than 2/3
            assign `computerChoice` a value of "paper"
        else
            assign `computerChoice` a value of "scissors"
        
        return `computerChoice`
3. Divide and conquer, i.e., break the big problem into smaller sub-problems and solve these one-by-one

The big problem here isn't that big so there only a few *obvious* sub-problems.
    - First problem: How to assign a random number using `Math.random` to the variable `randomNum`
    - 2nd problem: How to create conditional output based on the value of `randomNum`.

## Step 3: Write the logic to get the human choice.
1. Understand the problem
    - Create a function named `getHumanChoice` that takes the user choice and returns it under the assumption that the user will always enter a valid choice, i.e., rock, paper, or scissors.
2. Plan
    - Does this function have a user interface?
        - The user interface will consiste of build in browser elemets, e.g., an input box automatically generated wihen using the `prompt` method.
    - What inputs will this function have?
        - The user will input their choice of paper, rock or scissors.
    - What is the desired output?
        - The choice the user input.
    - What are the steps necessary to return the desired outputs?
        Call function `getHumanChoice`
        Create a variable called `humanChoice` of type `string` with a value equal to the string value entered by the user.
        Return the `humanChoice`
3. Divide and conquer

The problem here is really a sub-problem. How do you prompt the user to enter a string value? Once you figure that out, simply assign the value to the `humanChoice` variable and return that variable.

## Step 4: Declare the players score variables
This is as simpole as it gets. Literally declare two variables, `humanScore` and `computerScore` and initialize them with a value of `0`. 

## Step 5: Write teh logic to play a single round
1. Understand the problem
    - Write a function that takes human and computer choices as arguments, plays a single round of "rock, paper, scissors", increments the round winners score and logs a winner announcement.
2. Plan
    - Does this function have a user interface?
        -  No. Other functions generate the arguments and the console is used for output.
    - What inputs will the function have?
        - `humanChoice`, which is the output of the function `getHumanChoice`
        - `computerChoice`, which is the output of the function `getComputerChoice`
    - What is the desired output?
        - The winner of one round of rock, paper, scissors between the player (human) and the computer.
    - What are other relevant requirements and constraints?
        - Make the `humanChoice` functions parameter case-inseensitive so that players can input "rock", "ROCK", "RocK", or other variations.
        - Make three variations of messages for the three possible outcomes: the player wins, the player loses, it is a tie. 
            - "You win! Rock beats Scissors."
            - "You loose! Paper beats Rock."
            - "It's a tie! You both chose Rock."
        - Increment the humanScore or computerScore variables based on the round winner.
    - What are the steps necessary to achieve the desired outputs?
        - Call function `playRound` with two arguments `humanChoice` and `computerChoice` representing the choice each player makes in a game of rock, paper, scissors.
        - Declare variable `roundMessage` of type String and value `""`.
        - If `humanChoice` is "rock" AND `computerChoice` is "scissors" OR `humanChoice` is "paper" AND `computerChoice` is "rock" OR `humanChoice` is "scissors" AND `computerChoice` is "paper"
            `roundMessage` equals "You win! `humanChoice` beats `computerChoice`."
            `humanScore` equals `humanScore` plus `1`
        else if `computerChoice` is "rock" AND `humanChoice` is "scissors" OR `computerChoice` is "paper" AND `humanChoice` is "rock" OR `computerChoice` is "scissors" AND `humanChoice` is "paper"
            `roundMessage` equals "You loose! `computerChoice` beats `humanChoice`."
            `computerScore` equals `computerScore` plus `1`
        else `roundMessage` equals "It's a tie! You both chose `humanChoice`."
        - output `roundMessage` to the console



    
