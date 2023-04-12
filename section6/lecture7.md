# This Key Word :

## This Key Word / Variable :

- Is Special
  variable that is created for every execution context
  and there for any function
- will always take the value from the owner of the function in which this keyword is used.
- also used to point to the owner of the function .
- one of the component of execution context.

- the value of this keyword is not static it depends on how the function is called and the value only assigned when actually function called

- If Called As Method:

```js
const jonas = {
  name: "jonas",
  year: "1991",
  calcAge: function () {
    return;
    2037 - this.year;
  },
};
jonas.calcAge();
```

- If Called simple function:

  - this = undifined if you use strict mode other wise window in the browser
    .

- If Called arrow function:
- don't get own this

- If You called function as an event listener

  - then this keyword will always point to the DOM Elemnet that the handler function is attached to

- this is not point to the function itself, also this key word never point to the variable environment of the function there are really common missconcetions

# Practice On ThisKeyword

```js
"use strict";

// Is Window Object
console.log(this);
// Using regular function
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(2000);

// arrow function

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(2000);
const jonas = {
  name: "jonas",
  year: "1991",
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
// Thats Is called Method Borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
```
