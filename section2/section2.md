# Data Types:

- In every programming language The Values Can Have Different Types.
- That Depending On The Type Of Data That We Want Them To Hold.

<hr>

## Let's To Know all Data Type We Have In JavaScript :

- Every Value In JavaScript Is Either An Object some thing Like this

```js
let me = {
  name: 'aya',
};
```

- Or As A primitive Value like this

```js
let firstName = 'aya';
let aga = 23;
```

## so there are Seven Primitive Data Type:

- Number:
  - Always So-called Floating Point Numbers.
  - used for Decimals And Integers.
  ```js
  let age = 23;
  ```
- String

  - Sequence Of Characters.
  - Used For Text.
  - should Put Between quotes No Matter if Double quotes oR single quotes.

  ```js
  let firstName = 'Aya';
  let firstName = 'Aya';
  ```

- Boolean
  - Is Essentially ALogical Type.
  - Can Only Be True Or False.
  - Used For Taking Decisions.
  - You can Store Boolean Value In variables .
- Undefined
  - Is Value Taken By The Variable That Is Not Yet Defined "Empty Value".
  - The Variable Just Declared But Not Assign Any Value.
- Null
  - Is acutally Pretty Similar Because It Is Mean Empty Value But It Use In Different Circumstances.
- Symbol
  - This Data Type Which Introduce In ES5 2015.
  - This Data Type Is not Really UseFull For us
  - Value That Is Unique And Can't Be Changed
- Big Int

  - Starting In ES2020
  - Is Larger Integers Than Numbers Can Hold

  ```
  Java script Has Feature:
    - Dynamic Typing
    - That Mean We Don't Have Manually To Define The Data Type Of Value Stored In Variable Instead, Data Types Are Determines Automatically
  ```

  ```
  -There Is Very Important To distinguish That There are Different Between Variable and Value
  - Value Has A Type Not Variable
  - So Variable Simply Store Values That Has A Type
  ```

  ## Let's Talk About Programming Comment

  - So Programming Use Comments To Literally Come and Code Or Deactivate Code With Out Deleting It.
  - can Make comment :
    - single line comment Use Double Back slah Before Writting.
    - Multiple Line Comment Use /_ Your Comment _/

  ```js
  // Initialize Variable
  /*
  let country = "Egypt";
  console.log(country);
  */
  ```

## Why Declaration Of Variable Must Be Done Before Print it To Console?

- Because JavaScript Code Execute From Top To The Bottom.

```js
let jsIsFun = true;
console.log(jsIsFun); // True

console.log(htmlisfun); //Error
let htmlisfun = true;
```

## We Can Use An Operator Called `type of` just Like Plus operator or Minus operator:

- That We Can Use To Show Type Of Value

```js
console.log(typeof true); // Boolean
console.log(typeof country); // string
console.log(typeof 23); // Number

let year; // Decleration withOut assign Value
console.log(typeof year); // Undefined

year = true; //Assign Value To varaible That called dynamic typing
console.log(typeof year); // Boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

## There Are Three Different Ways To Declare Variable :

- We Always Used Let keyword To Declare Variable
- There Are Also Const And Var
- const Introduce In ES6 So called Modern JavaScript.
- The Var Keyword Is The Old Way Of Declaring variable.
- When we Use Let Keyword You Can Change The Value Of Variable From One To Another Can Be Mutated .
- On The Other Hand Const Keyword Use To Declare Variables That Are Not Supposed To Change At Any Point In The Future.
- so The Value In The Const Variable Can't Be Change.
- That Is Immutable Variable can't Be Mutated.
- When You Use Const Varaible You Need To Initialize Value .
- The Third Way Of Declaring Variable But This One Should Actually Completely
  Avoided.
- Var Is Old Way To Declare Variable
- It's Allow To Mutate Value Of Variable
<hr>

## name conventions and rules.

- spaces not valid.
- don't start with number.
- can use underscore anywhere.
- can use dollar sign anywhere.
- don't allow to use special character `@, #`.
- names case senstive.
- reserved words don't allow to use `function` `var` `if`

## Way of naming:

- camel case `userName`.
  <hr>

  # Comparison Between Let & Var & const :

-Var

- Redeclare (Yes):

```js
var a = 1; // Declartion
var a = 2; // Redeclartion
```

- Access Before Declare (Undefined)
- Variable Scope Drama [Added To Window] ()
- Block Or Scope Function

Let

- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()
- Block Or Scope Function

Const

- Redeclare (No => Error)
- Access Before Declare (Error)
- Variable Scope Drama ()
- Block Or Scope Function

  ```js
  const birthDate = 2000;
  console.log(birthDate);
  // Reassign Value
  birthDate = 2001; // Error You Make a Reassignment Value To Constant Variable
  console.log(birthDate);
  const job; // Error Missing Initializer In The Const Declaration
  ```

    <hr>

## What An Operators Acually Mean ?

- operators allow us to transform values or combine multiple values.
- really do all kind of work with values.
- there are many types of operators like:
  - Mathematical operators or arithematic operators.
  - logical operators.
  - assignment operators.
  - comparison operators.

## We Can Log Different values At The Same Time In The Same Console.log

## 1- Mathematical Operators:

- Plus (+)
- minus (-)
- Multiplication (\*)
- Power (\*\*)
- Devision (/)
- Modules Or Reminder (%)

```js
// Simple Use Case To Calculate The Age
const now = 2023;
const ageAya = now - 2000;
const ageMamy = now - 1983;
console.log(ageAya, ageMamy); // 23 40

// You can Make arithematic operation on Variable like This
console.log(ageAya * 2); // 46
console.log(ageAya / 2); // 11.5
console.log(ageAya + 2); // 25
console.log(ageAya % 2); // 1

// you Can Use Plus Operator To Concatenate  To String Like This
const firstName = 'aya';
const lastName = 'osama';
console.log(firstName + lastName); // ayaosama without any spaces
// if You Want To Make Spaces
console.log(firstName + ' ' + lastName); //aya osama
```

<hr>
 
## 2- Assignment Operators:
- Is The Most strightforward assignment operator is equal sign (=)
- plus Equal (+=)
- Minus Equal (-=)
- (*=)
- (/=)
- (%=)

```js
let x = 10 + 5; // 15
console.log(x); // 15 Because The Plus Operator Execute Frist before The Operation Of assignment  That Return To operator Precedence
x += 10; // x = x + 10 = 25
console.log(x); // 25
x *= 4; // x = x *4 25 *4 = 100
console.log(x); //100
x++; // x = x +1 = 100 +1 = 101
console.log(x); // 101
x--; // x = x -1 = 101 - 1 =100
x--; // x = x - 1 = 100 -1 = 99
console.log(x); // 99
```

<hr>

## 3- Comparison Operators :

- use it to produce boolean values.
- greater Than (>)
- less Than (<)
- greater than or equal (>=)
- Less Than Or Equal (<=)

```js
const now = 2023;
const ageAya = now - 2000;
const ageMamy = now - 1983;
console.log(ageMamy > ageAya); // True
console.log(ageAya >= 23); // True
console.log(ageMamy <= 23); // False
```

## The Precedence Of Operators:

## Build string And using Template literals:

- you can Use Template Literals To write multiline string.
- before it we need to use \n to start new line in which many programming language.

```js
// Simple program To Build A String
// I'm Aya, a 23 Years Old Front-End developer !
const firstName = 'Aya';
const job = 'Front_End developer';
const birthYear = 2000;
const year = 2023;

const aya =
  "I'm" + ' ' + firstName + ', a' + (year - birthYear) + 'Year Old' + job + '!';
console.log(aya);

const newAya = `I'm ${firstName}, a ${year - birthYear} Years Old ${job}!`;
console.log(newAya);
```

<hr>

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
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // 1991 as number , 1191 as string
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Jonas')); // NaN
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
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}
```

## Equality Operators: == vs. ===

```js
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23?');
```

<hr>

## WE Need To learn About Boolean Logic:

- Boolean Values Is Branch Of Computer Science, Which Uses True And False Vlaues To Solve
  Complex Logical Problems.
- And In Order To Do That It Uses Several Logical Operators To Combine True And False Values .
- So Much Like We Use Arithematic Operators To Combine Numeric Values.

## Logical Operators:

### And && :

- Combine Multiple Values.
- Must Both variable Are True.
- If Either One Of The Condition Is False Will Return False.
- No Matter How Many varaibles.
<hr>

### Or || :

- Combine Multiple Vlaues.
- If One Condition Of Two Or More Get True The Operation Become True .
- It's Enough one Of Them To Be True To Make The whole Operation Become True As Well.

<hr>

### Not ! :

- Is Not Combine Multiple Values.
- Acts An Only One Boolean Value.
- It Just Inverts It .
<hr>

# Example:

```js
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
```

<hr>

# Switch Statement :

- Is An Alternative way to writing a complecated if/else statement.
- when all we want to do is to compare one value to multiple different options.

```js
The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}
```

<hr>

## Statement & Expressions :

- Expression :
  - Is a piece of code that produce a value.

```js
//Statements and Expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);
```

<hr>

## Condiontal Operator Or Ternary Operator:

- Allow to write somthing similar to an if else statement but all in one line.
- Is perfect when we need to take a quick decision.
- we can write it directly in template literals.

```js
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
```
