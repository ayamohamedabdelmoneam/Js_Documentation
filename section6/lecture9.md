# Premitives Vs Objects (premitive Vs Reference Types )

- premitives like: they are stored in call stack of js engine called premitive types because it's where execution context run

  - string
  - numbers
  - boolean
  - undefined
  - null
  - big int
  - symbol

## What happen in call stack with premitive type ?

- first js will create a unique identifier with the variable name
- then a piece of memory will be allocated with acertain address
- and finally value will be stored in the memory at specified address
- identifier will be point to the address not to the value itself
- Objects: called reference types stored in heab because objects might be large to be stored in the stack

  - Object literal
  - Arrays
  - Functions

- stack store a reference to the memory position at which the object stored in the heapthat point to the the object that stored in the heap

## Example 1:

```js
// premitive vs object
"use strict";
let age = 23;
let oldAge = age;
age = 24;

console.log(age);
console.log(oldAge); // 23 because not achieve to the updated variable

const me = {
  name: "jonas",
  age: 23,
};
const friend = me;
friend.age = 27;

console.log("Friend:", friend);
console.log("Me", me);
```

## Example 2:

```js
// Primitives vs. Objects in Practice
"use strict ";

let lastName = "williams";
let oldLastName = lastName;
lastName = "David";

console.log(lastName);
console.log(oldLastName);

const jessica = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "David";
console.log("Before marriage", jessica);
console.log("after marriage", marriedJessica);

// copying objects

// this is built in functions that merge two objects then return new one
const jessica2 = {
  firstName: "jessica",
  lastName: "williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jasssicaCopy = Object.assign({}, jessica2);

jasssicaCopy.lastName = "Davids";
jasssicaCopy.family.push("Mary");
jasssicaCopy.family.push("John");
console.log("Before:", jessica2);
console.log("After:", jasssicaCopy);
```
