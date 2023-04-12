# strict Mode :

- is special mode you can activate in javascript .
- which it is make easy for us to write a secure javascript code.
- has to be the first statement code.
- that's mean if we have any code before this then strict mode willnot be activated .
- and we actually can activate strict mode only foer specific function or block.
- that make easy for developers to avoid accidental errors.
- so basically it helps us introduce the bugs into our code.
- because that :
  - first: strict mode forbids us to do cetain things.
  - second : it will actually create visible errors for us.
- comments are allwed because javascript will just ignore them but no code.
- another thing that strict mode does is to introduce short list of variable names that are reserved for feature.

```js
// then will activate strict mode for this entire script
"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
// make error will be show in the console .
if (hasDriversLicense) console.log(`I can Drive :D `);
```

<hr>

# Function:

- The fundamental buliding block of real world javascript application are functions.
- They are the most essential concepts in the language.
- Is simply piece of code that we can reuse over and over again in our code.
- so It's Like variable but for whole chuncks of code.
- variable can hold value but a function can hold one or more complete lines of code.
- To declare Function must be start with function key word like this
- To Make calling of function any where in your code just write function name That Name as (invoking , calling, running function)

```js
function logger() {
  // declare function
  // body of function
  console.log(`My Name Is Aya`);
}
// calling running or invoking function
// you can run this function as many times
logger();
logger();
logger();
```

- We also specify somthing called parameters.
- Parameters are like variables that are specific only to function .
- they are represent the input data of this function
- function allow us to write more maintable code because with functions we can create reusable chunks of code.
- the principle of function named dry don't repeat your self

```js
function foodProcessor(apples, oranges) {
  console.log(apples, oranges); // 5, 0
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = foodProcessor(5, 0);
const appleorangejuice = foodProcessor(3, 5);
console.log(appleorangejuice);
console.log(appleJuice);
console.log(foodProcessor(2, 6));

const num = Number("23"); // built in function
console.log(num); // 23 as number
```

<hr>

# Types Of Function:

- There are three types of function:
- 1- Regular Function:
  - also called function declaration

```js
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
```

- 2-Experssion Function:
  - you can write this type of function without name.
  - this type can also called anonymous function.
  - you can make calling this function before defined it in our code.
  - you need to store this type of function in a variable .
  - Example:

```js
// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
```

- 3- Arrow Function:
  - is another type of functions was add in es6.
  - is special form of function expression.
  - this is shorter and faster to write.
  - this named by arrow function because using of arrow operator .
  - you can remove curly bracket if you have only one line of code.
  - you can remove btrackets if you have one parameter

```js
// Arrow functions
// if you hve one parameter and one line of code

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3); // 46
// if you have more than one parameter and multiple line of code
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear; // to get your age
  const retirement = 65 - age; // to get years of retirement
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
```

# Calling One function from inside another function:

```js
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
```

```js
//Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
```
