# ExEcution context & Call stack

## How Js Code are Execute ?

- After compilation code has been ready to be executed .
- is so-called global execution context is created for the top level code that is code not inside any function .
- at the begenning the code outside function is executed then function will be execute when they are called .

## What Is Execution Context ?

- Is An abstract concept .
- is an enironment which pieces of js is executed store all the necessary information for some code to be executed such as local variable or arguments passed into functions .
- always code runs inside thr execution context.
- the environment where the top level code can be executed.
- global execution context created for the code that is not inside the function "Top Level Code".- once top level code execution is finished then execution of functions and waiting for callback .
- for each function call back is anew execution context is created call back like event listener.

## What is Inside Execution Context ?

### 1- variable Environment :

       - all our variables and functions declaration are stored
       - and there also special arguments objects this contains all the arguments that were passed into the function that the current execution context belongs to .

### 2- Scope Chain :

     - consists of refrernces to variable that are located outside the current function.
     - and to keep track of the scope chain it is stored in each execution context .
     - finally each context also gets a special variables.

### 3- This Keyword : will be discussed later deep

- is generated in execution phase.
- the most important thing to keep in your mind that execution context belonging to arrow function don't get their own arguments keyword

## What is call stack actually mean ?

- the place where execution context get stacked on top of each other to keep track of where we are in the execution .

## How call stack work ?

- create global scope so any code outside any function will be executed, then this global will be put in the call stack.
