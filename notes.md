# Project Notes

I will use this file for project notes. Since I'm just learning, I will explicitly go through the probelem solving steps as outlined in The Odin Project. 

## Step 2: Write the logic to ge the computer choice.
1. Understand the Problem
    - Create a function named `getComputerChoice` that randomly `return`'s one of the following string values: "rock", "paper", or "scissors". 
2. Plan
    - Does this function have a user intervace? **No**
    - What inputs will this function have? **None**
    - What is the desired output?
        - One of the following string outputs "rock", "paper", or "scissors"
    - What are the steps necessary to return the desired output?
        Call function 'getComputerChoice'
        Create a variable called `randomNum` of type `Number` with a random value greater or equal to zero and less than one. Generate this random value using the `Math.random` method.
        If the random value is less than 1/3
            output "rock"
        else if the random value is less than 2/3
            output "paper"
        else
            output "scissors"
3. Divide and conquer, i.e., break the big problem into smaller sub-problems and solve these one-by-one
The big problem here isn't that big so there only a few *obvious* sub-problems.
    - First problem: How to assign a random number using `Math.random` to the variable `randomNum`
    - 2nd problem: How to create conditional output based on the value of `randomNum`.

