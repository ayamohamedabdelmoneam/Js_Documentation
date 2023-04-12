# Regular Functions Vs Arrow Functions :

```js
"use strict";
var firstName = "jonas";
const jonas = {
  firstName: "jonas",
  year: "1991",
  // Regular function
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // solution 1
    // const self = this;
    // const isMilienial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMilienial();
    // solution2
    const isMilienial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMilienial();
  },
  // Arrow function
  // because don't get own this keyword use lexical this key word take it from global scope then if you define first name as varible in global scope will show as property of window object when declare it using var
  greet: () => {
    console.log(`Hey ${this.firstName}`); // Hey Undefined
    console.log(this); // window take it from global scope
  },
};
jonas.greet();
jonas.calcAge();

// argument key word find only in regular functions

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 3, 6, 7, 5);

// arrow function doesn't have argument key word
var addArrow = (a, b) => a + b;
```
