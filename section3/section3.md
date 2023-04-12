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

<hr>

# Introduction to arrays:

- The Most important data structure is Arrays & Objects .
- when we need to store more than one value we will be Use data structure.
- Let's Talk about the first data structure.
- array is like a big container into which we can throw variable and then later reference them
- use equal operator to create new arrays and then put brackets and then in there, we can put different values sperated by comma.
- there are another way to create array use built in function new Array
- Arrays Can Hold Any Numnber of values or any data type.
- if you want to show specific element in the array you can capture itusing number of index.
- the number of index start from zero
- You can also get the actual number of elements in the array you can use length property.
- length property specify the number of elements in the array .
- you can use length property to get the last element of array .
- Square brackets are not use only to get element from the array but we can also change it to add elemnt to array if you want to replace value in array with another value make an update
- The array can hold more than one type of data in the same time
- The array need to the expression to produce a value

# Hint :

- when we talk about variable declared with const, can not be changed And we did in fact declare the friends variable here with const but i was able to change one of this element of the array here from peter to jay it is that contradiction .
- so that because Premitive values only are immutable but array is't a primitive value so we can always change it so we can mutate it.
- works of this way because of the way that javascript stores things in the memory .
- but you can't change the whole array that is illegl

```js
const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // ['Michael', 'Steven', 'Peter']

// Create Array usine new array
const years = new Array(1991, 1984, 2020); // [1991 , 1984 , 2020]
console.log(years);

// if you want to get element at position 1
console.log(friends[0]); // Michael

// to get length of array
console.log(friends.length); // 3

// To get last element using length
// why make minus one because length is not Zero Based
console.log(friends[friends.length - 1]); // 'Peter'

// to make update value of element at position 2 with another value
friends[2] = "Jay";
console.log(friends); //['Michael', 'Steven', 'Jay']

// friends = ['Bob', 'Alice'] error

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length); //5

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]); //47
const age2 = calcAge(years[1]); // 70
const age3 = calcAge(years[years.length - 1]); // 19
console.log(age1, age2, age3);
// Create new array
const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
```

<hr>

# Basic Array Operation (Methods):

- Javascript has some built in Function that we can basically apply directly on arrays.

## 1- Push Method:

    - Use to adds element to the end of an array
    - is essentially a function that really attached to the array itself And that's what this dot here stands for .
    - push is amethod which technically is a function.

```js
const friends = ["Michael", "Steven", "Peter"];
//friends.push('jay')
console.log(friends);
console.log(friends.length);
// To get the length of new array store it in variable
const newLength = friends.push("Jay");
console.log(newLength);
```

## 2- unshift Method:

     - Use to add elements at the beginning of the array.

```js
const friends = ["Michael", "Steven", "Peter"];
friends.unshift("Jhon");
console.log(friends); // ['Jhon', 'Michael', 'Steven', 'Peter']
```

## 3- Pop Method:

     - Use To remove the last element of the array
     - in this we don't need to pass in any argument that is because no inforamtion needed really to just take out the last element.
     - this method also return somthing but this dosen't return the length of the new array but it's return removed element .

```js
const friends = ["Michael", "Steven", "Peter"];
friends.unshift("Jhon");
console.log(friends); // ['Jhon', 'Michael', 'Steven', 'Peter']

friends.pop();
const popped = friends.pop();
console.log(popped); // steven
console.log(friends); // peter & steven  will actually be gone
```

## 4- Shift Method :

    - Use To remove the first element of the array.
    - this method here will  also return that was removed.
    - also doesn't need to pass any arguments.

```js
const friends = ["Michael", "Steven", "Peter"];
friends.shift();
console.log(friends); // the first element will be removed
```

## 5- indexOf Method :

     - Use it tell us in which position a certain element is in the array.
     - this method need to pass the element that would be reference.
     - this method will return the index at which this element will located.
     - if you search the index of element that not included in the array will return -1 .

```js
const friends = ["Michael", "Steven", "Peter"];
console.log(friends.indexOf("Peter")); // 2
console.log(friends.indexOf("bob")); // -1
```

## 6- Includes Method:

     - this is very similar method to the indexOf but it which more modern so this one is an es6 method
     - Use to return true if the element is in the array and false if it's not.
     - also need to pass argument to be a reference.
     - this method use strict equality.
     - this mean that doesn't do type coercion.
     - there are many more useful methods for mainpulating arrays

```js
const friends = ["Michael", "Steven", "Peter"];
console.log(friends.includes("Jay")); //false
console.log(friends.includes("Peter")); //True
friends.push(23);
console.log(friends.includes("23")); // will be false
console.log(friends.includes(23)); // will be true
```

<hr>

# Introduction to objects:

- is another type of data structure.
- when use array we can't put name as reference to each element of array that depend on number of index but with objects we can give each of these values here a name.
- so in objects, we actually define key value pairs
- curly braces in object that use to difine a new object.
- key which mean variable name which also called as property.
- the value of variable here can be of any type that we want.
- objects are probably the most fundamental concepts in the whole javascript language.
- there are many ways of creating objects The simplest way to creat objects is using curly braces are called object literal syntax.
- we use objects to essentially group together different variables that belong together.

```js
// Array
const jonasArray = [
  "Joans",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];
// object
const jonas = {
  firstName: "Joans",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};
```

# How to retrive data From objects

- 1- using dot notation
- 2- using brackets Notation:
  - in bracket notation you can put any expression that we'd like so we don't have to explicity write the string here.

# How to add property to object:

- 1- you can use dot notation and bracket notation

```js
// Dot vs. Bracket Notation
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
```

<hr>

# Object Methods :

- we learned that object just like a race can hold different types of data and they can hold even a race and in fact they could hold objects inside objects .
- function is that another type of values and if function is just a value then that mean that we create a key value pair in which the value is function that mean we can add functions to objects.
- we can't use function declaration we need use an expression so will use function expression

```js
// Object Methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear
  // }
  // calcAge: function() {
  //   console.log(this);
  //   return 2073 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  // challenge
  // "Jonas is a 46-year old teacher, and he has a driver's license"
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
```

<hr>

# Iteration Or Loops :

- one of other control structure.
- is a fundamental aspect of every programming language because it allow us to automate repetitive tasks.
- loops run code over and over again until you tell to stop.
- Traditional counter Variable name has been (i)
- use for statment and it has three parts :
  - First Part :Initial Value Of Counter , will use let variable because this counter will later be updated by for loop.
  - Second Part : Is A Logical condition , that is evaluated before each iteration of the loop that mean loop will be keeps running while this condition stays true.
  - Third Part : is To increase The counter by one for each iteration counter = counter +1

```js
//Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️'); that don't achieve the principle of dry

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
```

<hr>

# Looping Arrays:

- Most useful application of for loop
- let's use this array in the example and use for statement to loop through this array that mean i want to individualy log each element to the console
- i need to start loop from zero as we know arrays start with zero index

```js
const jonasArray = [
  "Joans",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];
// create an empty array to store value of type of in it
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
  //types[i] = typeof jonasArray[i];
  // There Are another Way To add Elements To empty array use push method
  types.push(typeof jonasArray[i]);
}
console.log(types);

// another practical example you need to calc age from this array and strore them in new array :
const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);
```

# Breaking & Continuing:

- continue just treminate the current iteration
- Break does is to completely terminate the whole loop so not just the current iteration

```js
const jonasArray = [
  "Joans",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Micheal", "Peter", "Steven"],
  true,
];

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;

  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] === "number") break;

  console.log(jonasArray[i], typeof jonasArray[i]);
}
```

<hr>

# Looping Backward & loops inside loops:

- start from the last index to the start index
- how to make loop inside loop

```js
// Looping Backwards and Loops in Loops
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

// creat loop inside loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
```

<hr>

# While Loop:

- the while loop is more versatile than the for loop, that mean it can be used in a larger variety of situations.
- ywhen you use while loop you still need the same component.
- that's mean the code keep running while condition is true.
- but in many cases we don't need the counter but all the while loop really need is the condition which needs to stay true for it keep running and that condition can be any condition it doesn't have to be related to any counter at all and that we exactly we need to solve a certain problem .
- Example :
  - that doesn't depend on counter but instead it will depend on a random variable
  - what we're gonna do is to roll a dice and then keep rolling the dice until we roll a six and then when we roll a six, we stop.
  - we need to keep running loop while the rolled dice is different from six in this case we don't how many times should run so we don't need a counter variable

```js
// why using of math.trunc function so  this will give us a random integer number between zero and five  and then add one to get number from one to six
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`you rolled adice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`loop is about to end `);
}
```
