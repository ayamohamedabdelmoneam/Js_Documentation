# Hoisting & TDZ:

## How Variables are created in javascript?

- in javascript we have a mechanism called hoisting .

### Hoisting is :

- makes some types of variables can acessible and useable before they are actually declared, variables lifted to the top of thier scope.

- but behind the sence:
  - before execution the code is basically scanned for variable declaration that happen before it execute it.
  - execute happen during creation phase of execution context.
  - for each variable anew property is created in variable environment object, the way of let or const use to declare variable not creat property in window object.

## The Hoisting doesn't work the same for all variable types :

- 1- Function Declaration:
  - Is Hoisted
  - Intial Value Actual Function
  - Is Block Scope Int The strict Mode other wise is function scope
- 2- Var variables :
  - Is Hoisted
  - Initial Value Is Undifined
  - Function Scope
- 3- Let & Const Variables:
  - No Hiosted
  - Initial Value Is Un Initialized Becauese TDZ "Temporal dead zone"
  - Bloc Scope
- 4- Function Expression And Arrow Function :
  - return to the type of variable you store function in that's the reason of you can't use function expression before write them in the code un like function declaration .
  - arrow function is created by var is hoisted to undefined .

<hr>

## What Is The Mean Of Mysterious Temporal Dead Zone ?

- when you use let or const variables it's go to be accessible starting from the line where it's defined this is because TDZ.
- if you still tried to access variable while in TDZ You will get an refrenece error .
- when you tried to access variable that is never created at all you will get error variable is not defined .

## Why Actually need for javascript to have TDZ ?

- makes it easier to avoided and catch errors accessing variables before declaration is bad practice and should be avoided .
- makes const variables actually work the way they are supposed to .

## Why Hoisting?

- Although it causes many problems, because using function before actually declared is essential for some programming techniques such as metual recursion .
- some people think that make code more readable
  .

  ## Practice on Hoisting and TDZ :

```js
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}
// Window is aglobal Object of javascript in the browser
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
```
