- we need to go back to value types
- So types are one of the fundamental aspects
  in programming, and converting between types

- is something that we do in every programming language.

- For example, converting a string to a number
  or a number into a Boolean

- is something that we do all the time.
- And so it's important that we learn about this
<hr>

## Type Conversion & Type Coercion:

- So they sound very similar but are different.

### Type Conversion:

- Is When Manuallu Convert From One Type To Another.

```js
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991 as number , 1191 as string
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); // NaN
console.log(typeof NaN); // number

console.log(String(23), 23); // '23', 23
```

- when you put string inside number function return Not A Number , actually Means Invalid Number.
- fails to produce a new number.

### Type Coercion:

- Is When JavaScript Is Automatically Converts Typesbehind the scenes for us.
- type coercion happen whenever an operator is dealing with two values that have different types.
- so in that case javascript behind the scenes convert one of the value to match the other value at the end the operation can be executed.

```Js
// type coercion
console.log("I am " + 23 + " years old"); // rturn string
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n); //10
```

<hr>

## Truthy and Falsy Values

```js
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
```

## Equality Operators: == vs. ===

```js
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
```
