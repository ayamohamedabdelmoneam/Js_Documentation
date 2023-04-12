# Scope And The Scope Chain:

## Each Exexcution Context Has :

- Variable Environment.
- Scope Chain.
- This Keyword.

## What scoping actually mean ?

- controls how programs variable are organized and accessed bt the javascript engine.
- scoping ask some questions :
  - where variable lives?
  - where we can access a cetain variable?

### Note That :

- We Have in javascript somthing called lexical scoping.
- scoping is controlled by placement of functions and block in the code.
- when we write function inside function nested function can access all variable in the parent function and can access variable in the global scope.
- variable scoping influenced by where write our functions or code block.

## What Scope Itself Mean ?

- is the space or environment in which is acertain variable is declared Known as variable environment in case function Scope.

## There Are Three Scopes:

### 1-Global scope:

- Out side any function or block
- Variables that declared in global scope can be accessable every where in our program

```js
const name = "aya";
const age = 23;
const job = "developer";
```

<hr>

### 2-Function scope:

- functions create there own scope.
- variables are accessable only inside the function
- also called local scope.
- No matter type of function declaration or expression or arrow

```js
function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthYear;
  return age;
}
clacAge(1991);
console.log(now); // Reference error variable is not defined
```

<hr>

### 3- Block scope.

- Variables accessable only inside the block.
- any code between curly braces is block of code like if statement, loops.
- using var instead of let or const make variable still accessable outside block of code .
- function also block scoped.
- var is function scoped.
- in ES5 we had only global and function scope that's why ES5 variable declare with var they care about functions not care about blocks.

## The difference between scope chain & call Stack:

- scope chain has nothing to do with the order of execution contexts in the call stack.
- scope chain is the one way street ascope will never ever have access to the variables of inner scope only outerscope.
