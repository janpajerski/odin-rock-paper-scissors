# Project Notes

I will use this file for project notes. Since I'm just learning, I will explicitly go through the probelem solving steps as outlined in The Odin Project. 

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

